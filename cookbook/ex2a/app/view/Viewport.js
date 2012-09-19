Ext.define('Example.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Example.view.LoginForm'
    ],

    items: [{
        xtype: 'loginform'
    }]
});
