Ext.define('Cookbook.view.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.LoginForm',

    items: [{
        xtype: 'textfield',
        name: 'Username',
        fieldLabel: 'Username'
    }, {
        xtype: 'textfield',
        inputType: 'password',
        name: 'Password',
        fieldLabel: 'Password'
    }, {
        xtype: 'button',
        text: 'Login',
        action: 'login'
    }]
});
