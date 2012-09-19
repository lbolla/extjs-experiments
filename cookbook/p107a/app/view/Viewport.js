Ext.define('Example.view.MainMenu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainMenu',
    margins: '0 5 0 5',
    width: 200,
    layout: 'accordion',
    title: 'Main Menu',
    items: [{
        title: 'Menu1'
    }, {
        title: 'Menu2'
    }, {
        title: 'Menu3'
    }, {
        title: 'Menu4'
    }]
});

Ext.define('Example.view.TwoByTwo', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.twobytwo',
    requires: [
        'Example.view.Chart',
        'Example.view.Invoices'
    ],
    title: 'TwoByTwo',
    layout: {
        type: 'hbox',
        align: 'stretch',
        padding: 10
    },
    defaults: {
        flex: 1
    },
    items: [{
        xtype: 'container',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            frame: true,
            flex: 1,
            margins: 5
        },
        items: [{
            xtype: 'my_chart'
        }, {
            xtype: 'invoices'
        }]
    }, {
        xtype: 'container',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            frame: true,
            flex: 1,
            margins: 5
        },
        items: [{
            xtype: 'invoices'
        }, {
            xtype: 'my_chart'
        }]
    }]
});

Ext.define('Example.view.ContentPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.contentPanel',
    deferredRender: true,
    items: [{
        xtype: 'twobytwo'
    }, {
        xtype: 'twobytwo'
    }]
});

Ext.define('Example.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    items: [{
        region: 'north',
        xtype: 'container',
        html: 'Logo',
        height: 50
    }, {
        xtype: 'mainMenu',
        region: 'west'
    }, {
        xtype: 'contentPanel',
        region: 'center'
    }]
});
