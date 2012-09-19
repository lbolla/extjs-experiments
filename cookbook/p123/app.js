Ext.onReady(function() {

    var store = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'tree.json',
            reader: {
                root: 'data'
            }
        },
        root: {
            text: 'Countries',
            expanded: true
        }
    });

    var menu = Ext.create('Ext.tree.Panel', {
        title: 'Countries',
        region: 'west',
        margins: '0 5 0 0',
        width: 200,
        store: store,

        listeners: {
            itemclick: function(tree, record, item, index, e, options) {
                if (!record.data.leaf) {
                    return;
                }
                var nodeText = record.data.text,
                    tabPanel = Ext.getCmp('mytabpanel'),
                    tabBar = tabPanel.getTabBar(),
                    tabIndex;

                for (var i = 0; i < tabBar.items.length; i++) {
                    if (tabBar.items.get(i).getText() === nodeText) {
                        tabIndex = i;
                        break;
                    }
                }

                if (Ext.isEmpty(tabIndex)) {
                    tabPanel.add({
                        title: nodeText,
                        bodyPadding: 10,
                        closable: true,
                        html: nodeText
                    });
                    tabIndex = tabBar.items.length - 1;
                }

                tabPanel.setActiveTab(tabIndex);
            }
        }
    });

    var tabPanel = Ext.create('Ext.tab.Panel', {
        id: 'mytabpanel',
        region: 'center'
    });

    var viewport = Ext.create('Ext.container.Viewport', {
        layout: 'border',
        padding: 10,
        items: [
            menu,
            tabPanel
        ]
    });
});
