Ext.onReady(function() {

    Ext.create('Ext.panel.Panel', {
        title: 'Panel',
        width: 400,
        height: 100,
        style: 'margin: 10',
        tbar: [{
            xtype: 'button',
            text: 'Button',
            handler: function() { console.log('Button'); },
            menu: {
                xtype: 'menu',
                items: [{
                    text: 'menu1',
                    handler: function() { console.log('Menu1'); }
                }]
            }
        }, {
            xtype: 'splitbutton',
            text: 'SplitButton',
            handler: function() { console.log('Split'); },
            menu: {
                xtype: 'menu',
                items: [{
                    text: 'menu2',
                    handler: function() { console.log('Menu2'); }
                }, {
                    text: 'menu3',
                    disabled: true,
                    handler: function() { console.log('Menu3'); }
                }]
            }
        }],
        renderTo: Ext.getBody()
    });

});
