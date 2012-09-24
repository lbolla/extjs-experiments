Ext.onReady(function() {

    var GenericResponseHandler = function(proxy, response, operation, opts) {
        var msg = '';
        if (response.status !== 200) {
            // Nasty error
            msg = response.status + ' ' + response.statusText;
        } else {
            // Server replied with "success == false"
            msg = Ext.decode(response.responseText).error;
        }
        Ext.MessageBox.alert('Error', msg);
        console.log(msg);
    };

    Ext.util.Observable.observe(Ext.data.proxy.Ajax);
    Ext.data.proxy.Ajax.on('exception', GenericResponseHandler);

    Ext.define('FailedBook', {
        extend: 'Ext.data.Store',
        autoLoad: true,
        fields: [{
            name: 'Title',
            type: 'string'
        }],
        proxy: {
            type: 'ajax',
            url: 'books.json',
            afterRequest: function() {
                console.log('After request books');
            }
        }
    });

    Ext.define('MissingBook', {
        extend: 'Ext.data.Store',
        autoLoad: true,
        fields: [{
            name: 'Title',
            type: 'string'
        }],
        proxy: {
            type: 'ajax',
            url: 'missing.json'
        }
    });

    var b1 = Ext.create('FailedBook');
    var b2 = Ext.create('MissingBook');

});
