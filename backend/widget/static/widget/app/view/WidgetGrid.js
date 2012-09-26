Ext.define('Widget.view.WidgetGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.WidgetGrid',

    title: 'Widget',
    style: 'margin: 50;',

    columns: [],

    tbar: [{
        text: 'Refresh',
        action: 'refresh'
    }, {
        text: 'Add Column',
        action: 'addColumn'
    }, {
        text: 'Remove Column',
        action: 'removeColumn'
    }],

    initComponent: function() {
        this.store = new Ext.create('Widget.store.WidgetStore', {
            listeners: {
                'metachange': function(store, meta) {
                    this.reconfigure(store, meta.columns);
                },
                scope: this
            }
        });
        this.callParent();
    }

});
