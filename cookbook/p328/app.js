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
        }, {
            Client: 'Mohammed Ali',
            Date: '197?-??-??',
            Amount: -1,
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
            select: function(combo, records, opts) {
                var store = grid.getStore();
                store.clearFilter();
                if (records.length > 0 && records[0].get('Status') !== 'All') {
                    store.filter('Status', records[0].get('Status'));
                }
            }
        }
    });

    var searchTextField = Ext.create('Ext.form.field.Text', {
        fieldLabel: 'Client Search',
        enableKeyEvents: true,
        listeners: {
            keyup: {
                fn: function(field, e) {
                    var val = field.getValue().toLowerCase();
                    grid.getStore().filterBy(function(record) {
                        return record.get('Client').toLowerCase().indexOf(val) !== -1;
                    });
                },
                buffer: 250
            }
        }
    });

    var grid = Ext.create('Ext.grid.Panel', {
        title: 'GridPanel',
        width: 600,
        tbar: [filterCombo, searchTextField],
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
