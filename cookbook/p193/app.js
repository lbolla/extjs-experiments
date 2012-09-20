Ext.onReady(function() {

    Ext.define('DynamicForm', {
        extend: 'Ext.form.Panel',

        width: 600,
        style: 'margin: 10',

        tbar: [{
            text: 'Send',
            handler: function(btn) {
                var form = formPanel.getForm();
                console.log(form.getValues());
            }
        }, {
            text: 'Reset',
            handler: function(btn) {
                var form = formPanel.getForm();
                form.reset();
            }
        }, {
            text: 'Toggle',
            handler: function(btn) {
                var cbg = formPanel.down('checkboxgroup');
                var item = cbg.items.get(0);
                item.setValue(!item.getValue());
            }
        }],
        renderTo: Ext.getBody(),
        items: [],

        initComponent: function() {
            this.callParent();
            this.loadRecipients();
        },

        loadRecipients: function() {
            Ext.Ajax.request({
                url: 'recipients.json',
                success: this.onLoad,
                scope: this
            });
        },

        onLoad: function(response) {
            var json = Ext.decode(response.responseText);
            if (json.success) {
                var checkboxGroup = {
                    xtype: 'checkboxgroup',
                    columns: 2,
                    fieldLabel: 'Recipients',
                    name: 'recipients',
                    items: []
                };

                for (var i = 0; i < json.recipients.length; i++) {
                    var r = json.recipients[i];
                    checkboxGroup.items.push({
                        xtype: 'checkbox',
                        boxLabel: r.fullName,
                        name: 'recipients',
                        inputValue: r.userID,
                        checked: r.selected
                    });
                }

                this.add(checkboxGroup);

                var store = Ext.create('Ext.data.Store', {
                    fields: ['fullName', 'userID', 'selected'],
                    data: json.recipients
                });

                var combobox = {
                    xtype: 'combobox',
                    fieldLabel: 'Recipients',
                    name: 'recipients',
                    displayField: 'fullName',
                    valueField: 'userID',
                    queryMode: 'local',
                    typeAhead: true,
                    store: store,
                    listConfig: {
                        getInnerTpl: function() {
                            return '<h3>{fullName}</h3>' +
                                '<div>UserID {userID}</div>';
                        }
                    }
                };

                this.add(combobox);

                this.add({
                    xtype: 'container',
                    layout: 'fit',
                    items: [{
                        xtype: 'htmleditor',
                        name: 'fulltext',
                        value: response.responseText
                    }]
                });

            } else {
                Ext.MessageBox.alert('Error', 'Failed to decode json');
            }
        }

    });

    formPanel = Ext.create('DynamicForm');

});
