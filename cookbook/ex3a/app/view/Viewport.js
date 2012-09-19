Ext.define('Example.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Example.view.Invoices'
    ],

    items: [{
        xtype: 'invoices'
    }]

});
