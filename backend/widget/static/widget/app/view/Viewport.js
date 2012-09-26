Ext.define('Widget.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Widget.view.Page'
    ],

    layout: 'fit',
    items: [{
        xtype: 'Page'
    }]

});
