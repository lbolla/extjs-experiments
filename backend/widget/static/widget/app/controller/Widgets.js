Ext.define('Widget.controller.Widgets', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'widgetFormWindow',
        selector: 'WidgetFormWindow'
    }],

    init: function() {
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
        button.up('grid').getStore().load();
    },

    selectedGrid: null,

    onAddColumnButtonClick: function(button) {

        var win = this.getWidgetFormWindow();
        if (!win) {
            win = Ext.create('Widget.view.WidgetFormWindow', {
                formXType: 'WidgetFormAddColumn'
            });
        }
        this.selectedGrid = button.up('grid');
        win.show();
    },

    onRemoveColumnButtonClick: function(button) {

        var win = this.getWidgetFormWindow();
        if (!win) {
            win = Ext.create('Widget.view.WidgetFormWindow', {
                formXType: 'WidgetFormRemoveColumn',
                store: button.up('grid').getStore()
            });
        }
        this.selectedGrid = button.up('grid');
        win.show();
    },

    onDoAddColumnButtonClick: function(button) {
        Ext.Ajax.request({
            url: '/backend/widget/addColumn',
            params: button.up('form').getValues(),
            success: function(response) {
                this.selectedGrid.getStore().load();
                this.getWidgetFormWindow().close();
                this.selectedGrid = null;
            },
            scope: this
        });
    },

    onDoRemoveColumnButtonClick: function(button) {
        Ext.Ajax.request({
            url: '/backend/widget/removeColumn',
            params: button.up('form').getValues(),
            success: function(response) {
                this.selectedGrid.getStore().load();
                this.getWidgetFormWindow().close();
                this.selectedGrid = null;
            },
            scope: this
        });
    }

});
