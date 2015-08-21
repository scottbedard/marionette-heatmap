'use strict';

//
// Router
//
App.module('Router', function(Router, App, Backbone, Marionette, $, _) {

    // Routes and handlers
    Router.Router = Marionette.AppRouter.extend({
        routes: {
            '': 'index',
            'heatmap': 'heatmap',
        },
        index: function() {
            var Page = App.module('Heatmap.Views').Index;
            App.root.main.show(new Page);
        },
        heatmap: function() {
            var Page = App.module('Heatmap.Views').Heatmap;
            App.root.main.show(new Page);
        },
    });

    // Helper method to tell us where we are
    Router.getCurrentRoute = function() {
        return Backbone.history.fragment;
    }

});
