Ext.onReady(function() {

    Ext.create('Ext.container.Viewport', {
        layout: 'accordion',
        items: [{
            xtype: 'panel',
            title: 'First panel',
            html: 'First panel'
        }, {
            xtype: 'panel',
            title: 'Second panel',
            html: 'Second panel with frame',
            frame: true
        }, {
            xtype: 'panel',
            title: 'Third panel',
            html: 'Third panel'
        }]
    });

});
