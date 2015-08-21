'use strict';

//
// Header Links
//
App.module('Header.Links', function(HeaderLinks, App, Backbone, Marionette, $, _) {

    // Link model
    HeaderLinks.Model = Backbone.Model.extend({
        defaults: {
            text: '',
            route: '',
        },
    });

    // Links collection
    HeaderLinks.Collection = Backbone.Collection.extend({
        model: HeaderLinks.Model,
    });

});
