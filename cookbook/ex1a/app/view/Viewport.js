Ext.define('Example.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Example.view.Form'
    ],
    items: [{
        xtype: 'example-form'
    }]
});
