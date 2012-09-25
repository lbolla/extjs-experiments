Ext.onReady(function() {

    var invoices = Ext.create('Ext.data.Store', {
        fields: [{
            name: 'Client',
            type: 'string'
        }, {
            name: 'Date',
            type: 'date'
        }, {
            name: 'Amount',
            type: 'number'
        }, {
            name: 'Status',
            type: 'string'
        }],
        data: [{
            Client: 'LB',
            Date: '1977-05-29',
            Amount: 123,
            Status: 'Paid'
        }, {
            Client: 'LB',
            Date: '1977-05-29',
            Amount: 456,
            Status: 'Viewed'
        }, {
            Client: 'LM',
            Date: '1975-11-02',
            Amount: 999,
            Status: 'Draft'
        }]
    });

    var statuses = Ext.create('Ext.data.Store', {
        fields: ['Status'],
        data: [{
            Status: 'All'
        }, {
            Status: 'Paid'
        }, {
            Status: 'Viewed'
        }, {
            Status: 'Sent'
        }, {
            Status: 'Draft'
        }]
    });

    var filterCombo = Ext.create('Ext.form.field.ComboBox', {
        fieldLabel: 'Status Filter',
        labelWidth: 100,
        queryMode: 'local',
        displayField: 'Status',
        valueField: 'Status',
        store: statuses,
        listeners: {
            'select': function(combo, records, opts) {
                var store = grid.getStore();
                store.clearFilter();
                if (records.length > 0 && records[0].get('Status') !== 'All') {
                    store.filter('Status', records[0].get('Status'));
                }
            }
        }
    });

    var grid = Ext.create('Ext.grid.Panel', {
        title: 'GridPanel',
        width: 600,
        tbar: [filterCombo],
        store: invoices,
        columns: [{
            header: 'Client',
            dataIndex: 'Client',
            flex: 1
        }, {
            header: 'Date',
            dataIndex: 'Date'
        }, {
            header: 'Amount',
            dataIndex: 'Amount'
        }, {
            header: 'Status',
            dataIndex: 'Status'
        }],
        renderTo: Ext.getBody()
    });

});
