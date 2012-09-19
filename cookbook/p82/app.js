Ext.onReady(function() {

    Ext.create('Ext.container.Viewport', {
        layout: {
            type: 'vbox',
            align: 'stretch',
            padding: 10
        },
        items: [{
            xtype: 'panel',
            title: 'First panel',
            html: 'fix height',
            bodyPadding: 10,
            height: 100
        }, {
            xtype: 'panel',
            title: 'Second panel',
            frame: true,
            html: 'flex 1',
            bodyPadding: 10,
            flex: 1
        }, {
            xtype: 'panel',
            title: 'Third panel',
            html: 'flex 3',
            bodyPadding: 10,
            flex: 3
        }]
    });

});
