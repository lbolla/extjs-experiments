Ext.define('Example.store.Invoices', {
    extend: 'Ext.data.Store',

    autoLoad: true,
    fields: [],
    proxy: {
        type: 'ajax',
        url: 'invoices.json',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }
});
