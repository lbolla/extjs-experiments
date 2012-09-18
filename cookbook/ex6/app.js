Ext.onReady(function() {

    Ext.util.History.init();

    var tabPanel = Ext.create('Ext.tab.Panel', {
        renderTo: Ext.getBody(),
        height: 400,
        items: [{
            xtype: 'panel',
            title: 'First Panel',
            html: 'This is the first panel'
        }, {
            xtype: 'tabpanel',
            title: 'Second Panel',
            items: [{
                title: 'sub1',
                html: 'sub1'
            }, {
                title: 'sub1',
                html: 'sub1'
            }]
        }, {
            xtype: 'panel',
            title: 'Third Panel',
            html: 'This is the third panel'
        }, {
            xtype: 'panel',
            title: 'Fourth Panel',
            html: 'This is the fourth panel'
        }]
    });

    tabPanel.on({
        tabchange: function(tabPanel, newCard, oldCard, opts) {
            Ext.util.History.add(newCard.id);
        }
    });

    Ext.util.History.on('change', function(token) {
        if (!Ext.isEmpty(token)) {
            var panel = Ext.getCmp(token);
            if (panel) {
                var owner = panel.ownerCt;
                while (owner && owner.is('tabpanel')) {
                    // handle nested tab panels
                    owner.setActiveTab(panel);
                    panel = owner;
                    owner = panel.ownerCt;
                }
            }
        }
    });

});
