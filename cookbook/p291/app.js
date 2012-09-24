Ext.onReady(function() {

    Ext.tip.QuickTipManager.init();

    var people = Ext.create('Ext.data.Store', {
        fields: [{
            name: 'Name',
            type: 'string'
        }, {
            name: 'DOB',
            type: 'date',
            dateFormat: 'c'
        }],
        data: [{
            Name: 'Lorenzo',
            DOB: '1977-05-29'
        }, {
            Name: 'J',
            DOB: '0001-01-01'
        }]
    });

    var menu = Ext.create('Ext.menu.Menu', {
        width: 125,
        defaults: {
            listeners: {
                click: function(item) {
                    switch (item.itemId) {
                        case 'edit':
                            var records = grid.getSelectionModel().getSelection();
                            if (records.length > 0) {
                                onSelect(grid, records[0]);
                            }
                            break;
                        default:
                            Ext.MessageBox.alert('CLICK!', item.text + ' clicked!');
                            break;
                    }
                }
            }
        },
        items: [{
            text: 'View',
            icon: 'icons/user_suit.png',
            itemId: 'view'
        }, {
            text: 'Add',
            icon: 'icons/user_add.png',
            itemId: 'add'
        }, {
            text: 'Edit',
            icon: 'icons/user_edit.png',
            itemId: 'edit'
        }, {
            text: 'Delete',
            icon: 'icons/user_delete.png',
            itemId: 'delete'
        }]
    });

    var dateRenderer = Ext.util.Format.dateRenderer('d m Y');
    var numberRenderer = Ext.util.Format.numberRenderer('9.999');

    var grid = Ext.create('Ext.grid.Panel', {
        title: 'Right-click and Dbl-click',
        store: people,
        width: 600,
        renderTo: Ext.getBody(),
        style: 'margin: 10',
        features: [
            Ext.create('Ext.grid.feature.RowBody', {
                getAdditionalData: function(data, rowIndex, record, orig) {
                    var headerCt = this.view.headerCt,
                    colspan = headerCt.getColumnCount();
                    return {
                        rowBody: '<div>Hello world!</div>',
                        rowBodyCls: '.sub-row',
                        rowBodyColspan: colspan
                    };
                }}),
            {
                ftype: 'rowwrap'
            }
        ],
        columns: [{
            xtype: 'templatecolumn',
            header: 'Name',
            dataIndex: 'Name',
            tpl: new Ext.XTemplate(
                '{Name}<br/>',
                '<span class="dob" data-qtip="Date of Birth">{DOB:this.formatDOB}</span>', {
                    formatDOB: dateRenderer
                })
        }, {
            xtype: 'numbercolumn',
            header: 'Age',
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                var ms = Ext.Date.now() - record.get('DOB');
                return numberRenderer(ms / (1000 * 60 * 60 * 24 * 365));
            }
        }, {
            xtype: 'datecolumn',
            header: 'DOB',
            flex: 1,
            dataIndex: 'DOB'
        }],
        selType: 'rowmodel',
        listeners: {
            itemcontextmenu: function(view, record, item, index, e) {
                e.stopEvent();
                menu.showAt(e.getXY());
            },
            itemdblclick: function(RowModel, record, index, opts) {
                onSelect(grid, record);
            }
        }
    });

});

function onSelect(grid, record) {
    var panel = Ext.create('Ext.form.Panel', {
        bodyPadding: 10,
        width: 600,
        border: false,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'Name'
        }, {
            xtype: 'datefield',
            submitFormat: 'c',
            fieldLabel: 'Date of Birth',
            name: 'DOB'
        }],
        buttons: [{
            text: 'Update',
            handler: function() {
                var form = this.up('form').getForm(),
                    formValues = form.getValues(),
                    recordIndex = form.getRecord().index,
                    record = grid.getStore().getAt(recordIndex);

                record.beginEdit();
                record.set(formValues);
                record.endEdit();

                this.up('window').close();
            }
        }]
    });

    var win = Ext.create('Ext.window.Window', {
        title: 'Edit ' + record.get('Name'),
        renderTo: Ext.getBody(),
        modal: true,
        items: panel
    });

    win.show();
    panel.loadRecord(record);
}
