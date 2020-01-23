Vue.component("scenario", {
	template: "#scenario-template",
	props: {
		story: Object,
		language: String,
		objectsView: Boolean,
	},
	data: function (){
		return {
			currentIntro: "",
			newObject: false,
			showIntro: true,
			ready: true,
		};
	},
	computed:{
		steps: function(){
			return this.story.steps;
		},
		sortedObjects: function(){
			return this.story.objects.filter(function(o){return !o.locked;}).sort(function(a,b){return b.step - a.step;});
		},
		lockedObjects: function(){
			return this.story.objects.filter(function(o){return o.locked;})
		},
		unlockedObjectsCount: function(){
			return this.story.objects.filter(function(a){return !a.locked;}).length;
		},
		storyCompleted: function(){
			return this.story.stepIndex >= this.story.steps.length;
		}
	},
	methods: {
		goToNext: function(nextIntro){
			this.currentIntro = nextIntro;
			var passedIndex = this.story.stepIndex;
			var object = this.story.objects.find(function(o){return o.step == passedIndex;});
			if(object != null){
				object.locked = false;
				object.new = true;
				this.newObject = true;
			}
			this.story.stepIndex++;
		},
		regender: function(text){
			return regender(text, this.story.isFeminine);
		},
		endingAction: function(value){
			this.story.stepIndex++;
			this.story.endingValue = value;
			this.$emit('end');
		},
		delay: function(cb){
			var that = this;
			that.ready = false;
			cb();
			setTimeout(function(){
				that.ready = true;
			}, TRANSITION_DELAY+100); // add 100 because of setTimeout in hashChange between Objects/Story
		},
		delayNext: function(nextIntro){
			var that = this;
			that.delay(function(){
				that.goToNext(nextIntro);
			})
		}
	},
	mounted:function(){
		if(this.story.stepIndex > 0 && !this.storyCompleted)
			this.currentIntro = this.regender(this.story.steps[this.story.stepIndex - 1].next[this.language]);
		else
			this.currentIntro = this.regender(this.story.firstIntro[this.language]);
	},
	watch: {
		objectsView: function(toggled){
			if(!toggled){
				this.newObject = false;
				this.story.objects.forEach(function(o){
					o.new = false;
				});
			}
		}
	}
});