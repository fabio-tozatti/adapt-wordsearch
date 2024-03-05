define([
    "core/js/adapt",
    "core/js/views/componentView",
    "core/js/models/componentModel"
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
         console.log(settings)
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