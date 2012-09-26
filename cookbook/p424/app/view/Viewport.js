Ext.define('Cookbook.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: ['Cookbook.view.LoginForm'],

    items: [{
        xtype: 'LoginForm'
    }]
});
