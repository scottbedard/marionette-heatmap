'use strict';

//
// Header Views
//
App.module('Header.Views', function(HeaderViews, App, Backbone, Marionette, $, _) {

    // Note: It probably makes more sense to create the header as a composite
    //       view, with just the links collection. I did it this way simply
    //       to get more practice with nested views within parent layouts

    // Header Layout
    HeaderViews.Layout = Marionette.LayoutView.extend({
        template: '#header-layout',
        regions: {
            logo: '#logo-region',
            links: '#links-region',
        },
        onRender: function() {
            // Render the logo view
            var LogoView = HeaderViews.Logo;
            this.logo.show(new LogoView());

            // Render the links view
            var LinksView = HeaderViews.Links,
                LinksCollection = App.module('Header.Links').Collection,
                Links = new LinksCollection([
                    { text: 'About' },
                    { route: 'heatmap', text: 'Heatmap' },
                ]);
                // Todo: It shouldn't be the view's responsibility to define
                //       what the navigation links are, move this out. It
                //       might make more sense in App's onStart event?

            this.links.show(new LinksView({ collection: Links }));
        },
    });

    // Logo ItemView
    HeaderViews.Logo = Marionette.ItemView.extend({
        template: _.template('Marionette Heatmap'),
        tagName: 'a',
        className: 'navbar-brand',
        attributes: {
            href: '#',
        },
    });

    // Link ItemView
    HeaderViews.LinkView = Marionette.ItemView.extend({
        tagName: 'li',
        template: _.template('<a href="#<%= route %>"><%= text %></a>')
    });

    // Links CollectionView
    HeaderViews.Links = Marionette.CollectionView.extend({
        tagName: 'ul',
        className: 'nav navbar-nav',
        childView: HeaderViews.LinkView,
    });

});
