Ext.define('BugTracker.model.Bug', {
    extend: 'Ext.data.Model',

    fields: [
        'title',
        'status',
        'description',
        'severity'
    ]
});
