Ext.define('Example.view.Invoices', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.invoices',

    title: 'Dynamic Grid',
    columns: [],

    initComponent: function() {

        this.store = new Ext.create('Example.store.Invoices', {
            listeners: {
                'metachange': function(store, meta) {
                    this.reconfigure(store, meta.columns);
                },
                scope: this
            }
        });

        Ext.TaskManager.start({
            run: function() { 
                this.store.load();
            },
            interval: 1000,
            scope: this
        });

        this.callParent();
    }

});
