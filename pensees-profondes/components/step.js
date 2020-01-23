Vue.component("step", {
	template: "#step-template",
	props: {
		step: Object,
		intro: String,
		language: String,
		isFeminine: Boolean
	},
	data: function (){
		return {
			displayAction: false,
			wordsIndex: 0,
			splitter: "",
			currentInterval: null,
			intervalDelay: 38,
			baseIntervalDelay: 38,
		};
	},
	computed:{
		action: function(){
			return this.step.action[this.language];
		},
		nextIntro: function(){
			return this.regender(this.step.next[this.language]);
		},
		stepText: function(){
			return (this.intro + getBinding() + this.regender(this.step.description[this.language])).split(". ").join(".                        ");
		},
		wordsMax: function(){
			return this.stepText.split(this.splitter).length;
		},
		displayedText: function(){
			return this.stepText.split(this.splitter).slice(0, this.wordsIndex).join(this.splitter);
		}
	},
	methods: {
		regender: function(text){
			return regender(text, this.isFeminine);
		},
		setNewInterval: function(newInterval){
			var that = this;
			clearInterval(that.currentInterval);
			that.currentInterval = setInterval(function(){
				if(that.wordsIndex < that.wordsMax)
					that.wordsIndex++;
				else{
					clearInterval(that.currentInterval);
					that.displayAction = true;
				}
			}, newInterval);
		}
	},
	watch: {
		intervalDelay: function(newInterval){
			this.setNewInterval(newInterval);
		}
	},
	mounted: function(){
		var that = this;
		setTimeout(function(){
			that.setNewInterval(that.intervalDelay);
		}, TRANSITION_DELAY);
	},
});