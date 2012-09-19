Ext.onReady(function() {

    Ext.state.Manager.setProvider(new Ext.state.LocalStorageProvider());

    Ext.create('Ext.container.Viewport', {
        layout: 'auto',
        defaults: {
            draggable: true,
            collapsible: true,
            stateful: true
        },
        items: [{
            stateId: 'center-p103a',
            title: 'Center',
            width: 300,
            height: 200
        }, {
            stateId: 'north-p103a',
            title: 'North',
            width: 300,
            height: 200
        }, {
            stateId: 'south-p103a',
            title: 'South',
            width: 300,
            height: 200
        }, {
            stateId: 'east-p103a',
            title: 'East',
            width: 300,
            height: 200
        }]
    });

});
