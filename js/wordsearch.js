define([
    "core/js/adapt",
    "core/js/views/componentView",
    "core/js/models/componentModel",
    "../libraries/utility.js",
    "../libraries/wordsearch.js"
], function(Adapt, ComponentView, ComponentModel) {

    var MyPluginView = ComponentView.extend({
       // implement your component view

       postRender: function () {
         this.initialize();
      },

       initialize: function () {

         var settings = {
            'directions': ['W', 'N', 'WN', 'EN'],
            'gridSize': 10,
            'words': ['one', 'two', 'three', 'four', 'five'],
            'wordsList' : [],
            'debug': false
         }

         this.wordSearch = new WordSearch(this, settings);

         var gameAreaEl = document.getElementById('ws-area');
         var gameobj = gameAreaEl.wordSearch();
   
         // Put words into `.ws-words`
         var words = gameobj.settings.wordsList, wordsWrap = document.querySelector('.ws-words');
         for (i in words) {
           var liEl = document.createElement('li');
           liEl.setAttribute('class', 'ws-word');
           liEl.innerText = words[i];
           wordsWrap.appendChild(liEl);
         }
      }
    });

    var MyPluginModel = ComponentModel.extend({
       // implement your component model
    });

    return Adapt.register("myplugin", {
       view: MyPluginView,
       model: MyPluginModel
    });
   
});