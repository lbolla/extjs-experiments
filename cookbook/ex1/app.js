//Ext.onReady(function() {

//    Ext.create('Ext.panel.Panel', {
//        title: 'Tabular layout',
////        headerPosition: 'left',
//        width: 600,
//        height: 400,
//        style: 'margin: 50px',
//        renderTo: Ext.getBody(),
//        items: [{
//            width: 600,
//            height: 100,
//            html: 'Header',
//            colspan: 4
//        }, {
//            width: 150,
//            height: 300,
//            html: 'Left Menu',
//            rowspan: 2
//        }, {
//            width: 300,
//            height: 150,
//            html: 'Content Area',
//            colspan: 2,
//            cellId: 'lorenzo'
//        }],
//        layout: {
//            type: 'table',
//            columns: 4
//        }
//    });

//});

Ext.onReady(function() {

    Ext.create('Ext.form.Panel', {
        title: 'Form',
        width: 600,
        height: 400,
        style: 'margin: 50px',
        renderTo: Ext.getBody(),
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            flex: 1,
            defaultType: 'textfield',
            defaults: {
                allowBlank: false
            },
            items: [{
                fieldLabel: 'First Name',
                msgTarget: 'side'
            }, {
                fieldLabel: 'Last Name',
                msgTarget: 'under'
            }, {
                fieldLabel: 'Error Panel',
                msgTarget: 'error-container'
            }]
        }]
    });

});
