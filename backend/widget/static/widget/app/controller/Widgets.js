Ext.define('Widget.controller.Widgets', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'widgetGrid',
        selector: 'WidgetGrid'
    }, {
        ref: 'widgetFormWindow',
        selector: 'WidgetFormWindow'
    }],

    init: function() {
        console.log('Controller init');
        this.control({
            'WidgetGrid button[action="refresh"]': {
                click: this.onRefreshButtonClick
            },
            'WidgetGrid button[action="addColumn"]': {
                click: this.onAddColumnButtonClick
            },
            'WidgetFormAddColumn button[action="doAddColumn"]': {
                click: this.onDoAddColumnButtonClick
            },
            'WidgetGrid button[action="removeColumn"]': {
                click: this.onRemoveColumnButtonClick
            },
            'WidgetFormRemoveColumn button[action="doRemoveColumn"]': {
                click: this.onDoRemoveColumnButtonClick
            }
        });
    },

    onRefreshButtonClick: function(button) {
        this.getWidgetGrid().getStore().load();
    },

    onAddColumnButtonClick: function(button) {

        var win = this.getWidgetFormWindow();
        if (!win) {
            win = Ext.create('Widget.view.WidgetFormWindow', {
                formXType: 'WidgetFormAddColumn'
            });
        }
        win.show();
    },

    onRemoveColumnButtonClick: function(button) {

        var win = this.getWidgetFormWindow();
        if (!win) {
            win = Ext.create('Widget.view.WidgetFormWindow', {
                formXType: 'WidgetFormRemoveColumn',
                store: this.getWidgetGrid().getStore()
            });
        }
        win.show();
    },

    onDoAddColumnButtonClick: function(button) {
        Ext.Ajax.request({
            url: '/backend/widget/addColumn',
            params: button.up('form').getValues(),
            success: function(response) {
                this.getWidgetGrid().getStore().load();
                this.getWidgetFormWindow().close();
            },
            scope: this
        });
    },

    onDoRemoveColumnButtonClick: function(button) {
        Ext.Ajax.request({
            url: '/backend/widget/removeColumn',
            params: button.up('form').getValues(),
            success: function(response) {
                this.getWidgetGrid().getStore().load();
                this.getWidgetFormWindow().close();
            },
            scope: this
        });
    }

});
