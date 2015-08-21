'use strict';

//
// Heatmap Views
//
App.module('Heatmap.Views', function(HeatmapViews, App, Backbone, Marionette, $, _) {

    // Index view
    HeatmapViews.Index = Marionette.ItemView.extend({
        template: '#index-page',
    });

    // Heatmap view
    HeatmapViews.Heatmap = Marionette.ItemView.extend({
        template: '#heatmap-page',
    });

});
