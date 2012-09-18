Ext.define('Example.view.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',

    title: 'Login form',
    width: 500,
    height: 200,
    style: 'margin: 50px',

    initComponent: function() {
        Ext.Ajax.request({
            url: 'formStructure.json',
            scope: this,
            success: function(response, options) {
                var jsonResponse = Ext.decode(response.responseText);
                if (jsonResponse.success) {
                    this.add(jsonResponse.fields);
                }
            },
            failure: function(response, options) {
                Ext.MessageBox.alert('oops ', response.status);
            }
        });

        this.callParent();
    }

});
