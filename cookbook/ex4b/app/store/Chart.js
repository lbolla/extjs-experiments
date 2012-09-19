Ext.define('Example.store.Chart', {
    extend: 'Ext.data.Store',
    model: 'Example.model.Chart',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'chart.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
