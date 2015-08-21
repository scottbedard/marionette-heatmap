'use strict';

//
// Register the application
//
var App = new Marionette.Application();

//
// Root layout
//
App.RootLayout = Marionette.LayoutView.extend({
    el: '#app',
    template: '#app-layout',
    regions: {
        header: '#header',
    },
    onRender: function() {
        // Render the header layout
        var HeaderLayout = App.module('Header.Views').Layout;
        this.header.show(new HeaderLayout());
    },
});

//
// App -> onStart
//
App.on('start', function() {

    // Render the root layout
    var rootLayout = new App.RootLayout();
    rootLayout.render();

    // Fire up router and tell Backbone to pay attention
    var Router = new (App.module('Router').Router);
    Backbone.history.start();

});
