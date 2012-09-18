Ext.define('Example.view.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.example-form',

    title: 'Form',
    width: 600,
    height: 400,
    style: 'margin: 50px',
    renderTo: Ext.getBody(),
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [{
        flex: 1,
        defaultType: 'textfield',
        defaults: {
            allowBlank: false
        },
        items: [{
            fieldLabel: 'First Name',
            msgTarget: 'side'
        }, {
            fieldLabel: 'Last Name',
            msgTarget: 'under'
        }, {
            fieldLabel: 'Error Panel',
            msgTarget: 'error-container'
        }]
    }]
});
