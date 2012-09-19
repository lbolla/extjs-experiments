Ext.onReady(function() {

    Ext.state.Manager.setProvider(new Ext.state.LocalStorageProvider());
//    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

    Ext.define('StatefulPanel', {
        extend: 'Ext.panel.Panel',
        title: 'Stateful panel',
        width: 600,
        height: 400,
        collapsible: true,
        resizable: true,
        html: 'Hello World',
        tbar: [{
            xtype: 'button',
            text: 'Update Title',
            handler: function() {
                this.up('panel').setTitle('Random Title ' + Math.random());
            }
        }],
        stateful: true,
        stateId: 'panel-ex5',

        constructor: function(config) {
            this.callParent([config]);
            this.addStateEvents('titlechange');
        },

        getState: function() {
            var state = this.callParent();
            state.title = this.title;
            return state;
        }
    });

    var panel = Ext.create('StatefulPanel', {
        style: 'margin: 10px',
        renderTo: Ext.getBody()
    });

});
