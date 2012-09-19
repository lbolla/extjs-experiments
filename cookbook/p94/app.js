Ext.onReady(function() {

    Ext.define('MyPanel', {
        extend: 'Ext.panel.Panel',
        alias: 'widget.myPanel',
        initComponent: function() {
            this.on('render', function() {
                console.log('Render MyPanel ' + this.title);
            });
            this.callParent();
        }
    });

    var panel = Ext.create('Ext.panel.Panel', {
        width: 600,
        height: 400,
        renderTo: Ext.getBody(),
        layout: {
            type: 'card',
            deferredRender: true
        },
        items: [{
            xtype: 'myPanel',
            title: 'First panel',
            html: 'First panel'
        }, {
            xtype: 'myPanel',
            title: 'Second panel',
            html: 'Second panel with frame',
            frame: true
        }, {
            xtype: 'myPanel',
            title: 'Third panel',
            html: 'Third panel'
        }],
        bbar: ['->', {
            xtype: 'button',
            text: 'Previous',
            handler: function(btn) {
                var l = panel.getLayout();
                if (l.getPrev()) {
                    l.prev();
                }
            }
        }, {
            xtype: 'button',
            text: 'Next',
            handler: function(btn) {
                var l = panel.getLayout();
                if (l.getNext()) {
                    l.next();
                }
            }
        }]
    });

});
