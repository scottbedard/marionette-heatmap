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
            console.log ('This is the index');
        },
        heatmap: function() {
            console.log ('This is the heatmap');
        },
    });

    // Helper method to tell us where we are
    Router.getCurrentRoute = function() {
        return Backbone.history.fragment;
    }

});
