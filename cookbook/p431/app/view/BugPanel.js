Ext.define('BugTracker.view.BugPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.BugPanel',

    requires: [
        'BugTracker.view.BugDataView',
        'Ext.form.field.ComboBox'
    ],

    title: 'Current Bugs',
    height: 500,
    width: 580,
    layout: 'fit',
    style: 'margin: 50;',

    tbar: [{
        xtype: 'combo',
        name: 'severity',
        width: 200,
        labelWidth: 100,
        fieldLabel: 'Severity Filter',
        store: ['All', 1, 2, 3],
        queryMode: 'local'
    }, '-', {
        text: 'Sort by Severity',
        action: 'sortBySeverity'
    }, {
        text: 'Open all Bugs',
        action: 'openAllBugs'
    }],

    items: [{
        xtype: 'BugDataView'
    }]
});
