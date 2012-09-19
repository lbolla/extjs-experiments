Ext.onReady(function() {

    var mainMenu = Ext.create('Ext.panel.Panel', {
        region: 'west',
        margins: '0 5 0 5',
        width: 200,
        layout: 'accordion',
        title: 'Main Menu',
        items: [{
            title: 'Menu1'
        }, {
            title: 'Menu2'
        }, {
            title: 'Menu3'
        }, {
            title: 'Menu4'
        }]
    });

    var panel1 = Ext.create('Ext.panel.Panel', {
        title: 'Panel1',
        layout: 'card',
        items: [{
            title: 'Card1',
            html: 'Card 1',
            bodyPadding: 10
        }, {
            title: 'Card2',
            html: 'Card 2',
            bodyPadding: 10
        }],
        tbar: [{
            xtype: 'button',
            text: 'Previous',
            handler: function(btn) {
                var layout = panel1.getLayout();
                if (layout.getPrev()) {
                    layout.prev();
                }
            }
        }, {
            xtype: 'button',
            text: 'Next',
            handler: function(btn) {
                var layout = panel1.getLayout();
                if (layout.getNext()) {
                    layout.next();
                }
            }
        }]
    });

    var panel2 = Ext.create('Ext.panel.Panel', {
        title: 'Panel2',
        layout: {
            type: 'hbox',
            align: 'stretch',
            padding: 10
        },
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                frame: true,
                flex: 1,
                margins: 5
            },
            items: [{
                title: 'Box1'
            }, {
                title: 'Box2'
            }]
        }, {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                frame: true,
                flex: 1,
                margins: 5
            },
            items: [{
                title: 'Box3'
            }, {
                title: 'Box4'
            }]
        }]
    });

    var contentPanel = Ext.create('Ext.tab.Panel', {
        region: 'center',
        items: [panel1, panel2]
    });

    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'north',
            xtype: 'container',
            html: 'Logo',
            height: 100
        }, {
            region: 'east',
            title: 'East',
            width: 200,
            collapsible: true,
            collapsed: true
        },
        contentPanel,
        mainMenu
        ]
    });

});
