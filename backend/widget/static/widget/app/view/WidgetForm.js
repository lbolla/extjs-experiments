Ext.define('Widget.view.WidgetFormAddColumn', {
    extend: 'Ext.form.Panel',
    alias: 'widget.WidgetFormAddColumn',

    border: 0,

    items: [{
        xtype: 'textfield',
        name: 'colName',
        fieldLabel: 'Column Name'
    }, {
        xtype: 'combo',
        name: 'colType',
        fieldLabel: 'Column Type',
        store: ['string', 'integer']
    }],

    buttons: [{
        text: 'Add!',
        action: 'doAddColumn'
    }]

});

Ext.define('Widget.view.WidgetFormRemoveColumn', {
    extend: 'Ext.form.Panel',
    alias: 'widget.WidgetFormRemoveColumn',

    border: 0,

    buttons: [{
        text: 'Remove!',
        action: 'doRemoveColumn'
    }],

    initComponent: function() {
        var fields = [];
        tmp = this.store;
        // Note: cloned grids have empty model!
//        Ext.each(this.store.model.getFields(), function(field) {
        Ext.each(this.store.getAt(0).fields.items, function(field) {
            if (field.name !== 'id') {
                fields.push(field.name);
            }
        });
        this.items = [{
            xtype: 'combo',
            name: 'colName',
            fieldLabel: 'Column Name',
            store: fields
        }];
        this.callParent();
    }

});
