var root = new Vue({
	el: "#root",
	data: function (){
		return {
			gameTitle: {
				fr: ["Pensées", "Profondes"]
			},
			language: "fr",
			stories: getStories(),
			selectedStory: null,
			ready: false,
			objectsView: false,
			credits: false,
		};
	},
	computed:{
		visibleStories: function(){
			var visible = [];
			for (var i = 0; i < this.stories.length; i++) {
				visible.push(this.stories[i]);
				if(this.stories[i].stepIndex < this.stories[i].steps.length + 1)
					i = this.stories.length;
			}
			return visible;
		}
	},
	methods: {
		onHashChange: function(e){
			var hash = window.location.hash;
			hash = hash.replace("#", "");
			this.ready = false;
			var that = this;
			if(hash == ""){
				that.selectedStory = null;
				setTimeout(function(){
					that.ready = true
					document.body.classList.remove('dark');
				}, TRANSITION_DELAY);
			}else{
				setTimeout(function(){
					var storynb = hash.replace("/objects", "");
					that.selectedStory = parseInt(storynb);
					that.objectsView = hash.indexOf("/objects") > -1;
					document.body.classList.add('dark');
				}, TRANSITION_DELAY);
			}
		},
		goToHash: function(hash){
			if(hash == "/objects")
				window.location.hash = location.hash + hash;
			else if(hash == "/")
				window.location.hash = location.hash.replace("/objects", "");
			else
				window.location.hash = "#" + hash;
		},
		saveToLocalStorage: function(key, item){
			localStorage.setItem(key, JSON.stringify(item));
		},
		resetLocalStorage: function(){
			localStorage.removeItem(STORIES_KEY);
			window.location.reload();
		}
	},
	mounted: function(){
		var hash = location.hash;		
		location.hash = "";
		window.onhashchange = this.onHashChange;
		if(hash.length < 2)
			this.onHashChange();
	},
	watch: {
		stories: {
			handler: function(newStories){
				this.saveToLocalStorage(STORIES_KEY, newStories);
			},
			deep: true
		}
	}
});