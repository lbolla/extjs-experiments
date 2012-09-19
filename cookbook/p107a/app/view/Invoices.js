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

        this.updater = Ext.create('Example.controller.Updater', {
            action: {
                run: function() { 
                    this.store.load();
                },
                interval: 1000,
                scope: this
            }
        });
        this.updater.start();

        this.callParent();
    }

});
