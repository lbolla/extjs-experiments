Ext.define('Widget.view.Page', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Page',

    requires: [
        'Widget.view.WidgetGrid'
    ],

    layout: 'column',

    title: 'Widgets Page',
    tbar: [{
        text: 'Add Widget',
        action: 'addWidget'
    }],

    defaults: {
        columnWidth: 0.5
    },

    items: [{
        xtype: 'WidgetGrid'
    }]

});
