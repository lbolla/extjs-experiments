Ext.onReady(function() {

    Ext.create('Ext.panel.Panel', {
        title: 'Parent panel',
        width: 600,
        height: 400,
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [{
            xtype: 'panel',
            title: 'Child panel',
            html: 'Panel content',
            bodyPadding: 10,
            border: true
        }]
    });

});
