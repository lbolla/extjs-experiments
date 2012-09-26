Ext.define('Widget.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Widget.view.WidgetGrid'
    ],

    layout: 'fit',
    items: [{
        xtype: 'WidgetGrid'
    }]

});
