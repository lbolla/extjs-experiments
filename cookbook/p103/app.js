Ext.onReady(function() {

    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'center',
            title: 'Center',
            html: 'Center panel'
        }, {
            region: 'north',
            xtype: 'container',
            title: 'North',
            html: 'North container',
            height: 100
        }, {
            region: 'south',
            title: 'South',
            flex: 0.3,
            split: true
        }, {
            region: 'east',
            title: 'East',
            width: 200,
            collapsible: true,
            collapsed: true
        }, {
            region: 'west',
            title: 'West',
            flex: 0.2,
            collapsible: true,
            split: true,
            titleCollapse: true
        }]
    });

});
