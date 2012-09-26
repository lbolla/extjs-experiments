Ext.define('BugTracker.view.BugForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.BugForm',

    border: 0,
    items: [{
        xtype: 'textfield',
        name: 'title',
        fieldLabel: 'Title'
    }, {
        xtype: 'textfield',
        name: 'description',
        fieldLabel: 'Description'
    }, {
        xtype: 'numberfield',
        name: 'severity',
        fieldLabel: 'Severity',
        value: 1,
        minValue: 1,
        maxValue: 5
    }, {
        xtype: 'combo',
        name: 'status',
        fieldLabel: 'Status',
        store: ['open', 'close', 'rejected'],
        queryMode: 'local'
    }]

});
