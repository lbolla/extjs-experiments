Ext.define('BugTracker.store.BugStore', {
    extend: 'Ext.data.Store',
    model: 'BugTracker.model.Bug',
    data: [{
        title: 'Bug1',
        status: 'open',
        description: 'First bug',
        severity: 1
    }, {
        title: 'Bug2',
        status: 'closed',
        description: 'Second bug',
        severity: 2
    }, {
        title: 'Bug3',
        status: 'rejected',
        description: 'Third bug',
        severity: 3
    }]
});
