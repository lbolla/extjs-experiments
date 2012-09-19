//Ext.onReady(function() {

//    var formPanel = Ext.create('Ext.form.Panel', {
//        title: 'Login form',
//        width: 500,
//        height: 200,
//        style: 'margin: 50px',
//        renderTo: Ext.getBody()
//    });

//    Ext.Ajax.request({
//        url: 'formStructure.json',
//        success: function(response, options) {
//            var jsonResponse = Ext.decode(response.responseText);
//            if (jsonResponse.success) {
//                formPanel.add(jsonResponse.fields);
//            }
//        },
//        failure: function(response, options) {
//            Ext.MessageBox.alert('oops ', response.status);
//        }
//    });

//});

Ext.define('LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'loginform',
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

Ext.onReady(function() {
    Ext.create('loginform', {
        renderTo: Ext.getBody()
    });
});
