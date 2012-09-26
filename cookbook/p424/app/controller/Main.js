Ext.define('Cookbook.controller.Main', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'usernameField',
        selector: 'textfield[name=Username]'
    }, {
        ref: 'passwordField',
        selector: 'textfield[name=Password]'
    }],

    init: function() {
        console.log('Init controller');

        this.control({
            'button[action=login]': {
                click: this.onLoginButtonClick
            }
        });
    },

    onLoginButtonClick: function(button) {
        console.log('Login clicked');
        console.log(this.getUsernameField().getValue());
        console.log(this.getPasswordField().getValue());
        console.log(button.up('form').down('textfield[name=Username]').getValue());
    }

});
