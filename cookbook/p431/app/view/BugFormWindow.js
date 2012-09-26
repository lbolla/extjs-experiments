Ext.define('BugTracker.view.BugFormWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.BugFormWindow',

    requires: [
        'BugTracker.view.BugForm'
    ],

    title: 'Edit bug',
    modal: true,
    items: [{
        xtype: 'BugForm'
    }],
    closeAction: 'hide',
    buttons: [{
        text: 'Save',
        action: 'saveBug'
    }]
});
