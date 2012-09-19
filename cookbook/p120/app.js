Ext.onReady(function() {

    var store1 = Ext.create('Ext.data.TreeStore', {
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

    var panel1 = Ext.create('Ext.tree.Panel', {
        title: 'Countries',
        width: 600,
        height: 400,
        store: store1,
        style: 'margin: 10',
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop'
            }
        }
    });

    var store2 = Ext.create('Ext.data.TreeStore', {
        root: {
            text: 'Bin',
            children: [{
                text: 'Rome',
                leaf: true
            }],
            expanded: true
        }
    });

    var panel2 = Ext.create('Ext.tree.Panel', {
        title: 'Rubbish',
        width: 600,
        height: 400,
        store: store2,
        style: 'margin: 10',
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop',
                enableDrop: true,
                enableDrag: false,
                allowContainerDrop: true
            }
        }
    });

    Ext.create('Ext.container.Viewport', {
        layout: 'hbox',
        items: [panel1, panel2]
    });
});
