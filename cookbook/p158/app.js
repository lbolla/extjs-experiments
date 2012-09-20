Ext.onReady(function() {

    var formPanel = Ext.create('Ext.form.Panel', {
        title: 'Support Ticket request',
        width: 600,
        style: 'margin: 10',
        renderTo: Ext.getBody(),

        buttons: [{
            text: 'Submit',
            handler: function(btn) {
                var form = formPanel.getForm();
                if (form.isValid()) {
                    form.submit({
                        url: '/',
                        success: function(form, action) {
                            console.log('Submission successful');
                            console.log(action.result.message);
                        },
                        failure: function(form, action) {
                            console.log('Submission failed');
                            console.log(action.failureType);
                        }
                    });
                } else {
                    Ext.MessageBox.alert('ERROR', 'Invalid form');
                }
            }
        }],

        items: [{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'textfield',
                name: 'FirstName',
                fieldLabel: 'First name',
                labelAlign: 'top',
                style: 'margin: 5',
                flex: 1
            }, {
                xtype: 'textfield',
                name: 'LastName',
                fieldLabel: 'Last name',
                labelAlign: 'top',
                style: 'margin: 5',
                flex: 1
            }]
        }, {
            xtype: 'container',
            layout: 'column',
            items: [{
                xtype: 'textfield',
                name: 'Email',
                fieldLabel: 'Email address',
                labelAlign: 'top',
                style: 'margin: 5',
                vtype: 'email',
                columnWidth: 0.6 
            }, {
                xtype: 'textfield',
                name: 'Tel',
                fieldLabel: 'Tel number',
                labelAlign: 'top',
                style: 'margin: 5',
                columnWidth: 0.4
            }]
        }, {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'textarea',
                name: 'RequestDetails',
                fieldLabel: 'Request details',
                labelAlign: 'top',
                style: 'margin: 5',
                height: 250,
                flex: 2
            }, {
                xtype: 'checkboxgroup',
                name: 'RequestType',
                fieldLabel: 'Request type',
                labelAlign: 'top',
                style: 'margin: 5',
                flex: 1,
                columns: 1,
                vertical: true,
                items: [{
                    boxLabel: 'Type 1',
                    name: 'type1',
                    inputValue: 1
                }, {
                    boxLabel: 'Type 2',
                    name: 'type2',
                    inputValue: 2
                }, {
                    boxLabel: 'Type 3',
                    name: 'type3',
                    inputValue: 3
                }]
            }]
        }, {
            xtype: 'filefield',
            fieldLabel: 'Attachment',
            style: 'margin: 5',
            width: 300
        }]
    });

    var requestData = {
        FirstName: 'John',
        LastName: 'Petrucci',
        Email: 'petrucci@dt.com',
        Tel: '666-666',
        RequestDetails: 'DT looking for new guitar player!',
        RequestType: {
            type2: true
        }
    };

    formPanel.getForm().setValues(requestData);

});
