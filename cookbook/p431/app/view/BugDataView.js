Ext.define('BugTracker.view.BugDataView', {
    extend: 'Ext.view.View',
    alias: 'widget.BugDataView',

    config: {
        store: 'BugStore',
        tpl: '<tpl for=".">' +
            '<div class="bug-wrapper">' +
            '<span class="title">{title}</span>' +
            '<span class="severity severity-{severity}">{severity}</span>' +
            '<span class="description">{description}</span>' +
            '<span class="status status-{[values.status.toLowerCase()]}">{status}</span>' +
            '</div>' +
            '</tpl>',
        itemSelector: 'div.bug-wrapper',
        emptyText: 'No bugs!',
        deferEmptyText: false
    }
});
