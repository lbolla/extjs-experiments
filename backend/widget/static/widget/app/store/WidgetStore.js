Ext.define('Widget.store.WidgetStore', {
    extend: 'Ext.data.Store',

    autoLoad: true,
    fields: [],
    proxy: {
        type: 'ajax',
        url: '/backend/widget',
        reader: {
            type: 'json',
            root: 'rows'
        }
    }

});
