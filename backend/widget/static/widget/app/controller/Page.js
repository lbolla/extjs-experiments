Ext.define('Widget.controller.Page', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'Page',
        selector: 'Page'
    }],

    init: function() {
        this.control({
            'Page button[action="addWidget"]': {
                click: this.onAddWidgetButtonClick
            }
        });
    },

    onAddWidgetButtonClick: function(button) {

        var page = this.getPage();
        page.add({
            xtype: 'WidgetGrid'
        });
    }

});
