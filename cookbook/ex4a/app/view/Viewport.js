Ext.define('Example.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Example.view.Chart'
    ],
    items: [{
        xtype: 'my_chart'
    }]
});
