Ext.onReady(function() {

    var invoiceStore = Ext.create('Ext.data.Store', {
        storeId: 'invoiceStore',
        autoLoad: true,
        fields: [],
        proxy: {
            type: 'ajax',
            url: 'invoices.json',
            reader: {
                type: 'json',
                root: 'rows',
                onMetaChange: function(meta) {
                    Ext.data.reader.Json.prototype.onMetaChange.call(this, meta);
                    if (meta.columns) {
                        invoicesGrid.reconfigure(invoicesGrid.getStore(), meta.columns);
                    }
                }
            }
        }
    });

    var invoicesGrid = Ext.create('Ext.grid.Panel', {
        title: 'Dynamic Grid',
        width: 600,
        height: 400,
        store: Ext.data.StoreManager.lookup('invoiceStore'),
        columns: [
        ],
        style: 'margin: 10px',
        renderTo: Ext.getBody()
    });

    Ext.TaskManager.start({
        run: function() { invoiceStore.load(); },
        interval: 1000
    });

});
