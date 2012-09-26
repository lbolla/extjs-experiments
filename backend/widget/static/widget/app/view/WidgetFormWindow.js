Ext.define('Widget.view.WidgetFormWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.WidgetFormWindow',

    title: 'Add new column',
    modal: true,

    requires: [
        'Widget.view.WidgetForm'
    ],

    initComponent: function() {
        this.items = [{
            xtype: this.formXType,
            store: this.store
        }];
        this.callParent();
    }

});
