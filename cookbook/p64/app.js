Ext.onReady(function() {
    Ext.create('Ext.button.Button', {
        text: 'Puff!',
        renderTo: Ext.get('controls'),
        handler: function() {
            Ext.get('animate').puff();
        }
    });
    Ext.create('Ext.button.Button', {
        text: 'Switch Off!',
        renderTo: Ext.get('controls'),
        handler: function() {
            Ext.get('animate').switchOff();
        }
    });
    Ext.create('Ext.button.Button', {
        text: 'Slide Out!',
        renderTo: Ext.get('controls'),
        handler: function() {
            Ext.get('animate').slideOut();
        }
    });
    Ext.create('Ext.button.Button', {
        text: 'Frame!',
        renderTo: Ext.get('controls'),
        handler: function() {
            Ext.get('animate').frame('#f00', 1, {
                duration: 500
            });
        }
    });
    Ext.create('Ext.button.Button', {
        text: 'Fade Out!',
        renderTo: Ext.get('controls'),
        handler: function() {
            Ext.get('animate').fadeOut();
        }
    });
});
