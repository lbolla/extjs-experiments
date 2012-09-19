Ext.define('Person', {
    config: {
        'name': null
    },

    constructor: function(config) {
        this.initConfig(config);
    },

    applyName: function(name) {
        Ext.get('name').update(name);
        return name;
    }

});

Ext.onReady(function() {

    p = Ext.create('Person', {
        name: 'Lorenzo'
    });

});
