Ext.define('BugTracker.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'BugTracker.view.BugPanel'
    ],

    layout: 'fit',
    items: [{
        xtype: 'BugPanel'
    }]
});
