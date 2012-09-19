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

    Ext.create('Ext.tree.Panel', {
        title: 'Countries',
        width: 600,
        height: 400,
        store: store,
        style: 'margin: 10',
        renderTo: Ext.getBody()
    });

});
