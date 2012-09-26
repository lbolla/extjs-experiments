Ext.application({
    name: 'Widget',
    autoCreateViewport: true,

    controllers: [
        'Widgets',
        'Page'
    ],

    launch: function() {
        console.log('App launched!');
    }
});
