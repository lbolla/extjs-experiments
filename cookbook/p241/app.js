Ext.onReady(function() {

    Ext.define('Book', {
        extend: 'Ext.data.Model',
        idProperty: 'ISBN',
        fields: [{
            name: 'Title',
            type: 'string'
        }, {
            name: 'ISBN',
            type: 'string'
        }],
        associations: [{
            type: 'hasMany',
            model: 'Author',
            name: 'authors'
        }]
    });

    Ext.define('Author', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'FirstName',
            type: 'string'
        }, {
            name: 'LastName',
            type: 'string'
        }],
        validations: [{
            type: 'length',
            field: 'FirstName',
            min: 2
        }],
        associations: [{
            type: 'hasMany',
            model: 'Address',
            name: 'addresses'
        }]
    });

    Ext.define('Address', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'City'
        }]
    });

    bookStore = Ext.create('Ext.data.Store', {
        autoLoad: true,
        model: 'Book',
        proxy: {
            type: 'ajax',
            url: 'books.json',
            reader: {
                type: 'json',
                root: 'books'
            }
        }
    });

    var panel = Ext.create('Ext.panel.Panel', {
        title: 'Books',
        width: 600,
        height: 400,
        renderTo: Ext.getBody()
    });

    bookStore.on('load', function() {
        var book = bookStore.getAt(0);
        panel.add({
            xtype: 'text',
            text: book.get('Title')
        });
        book.authors().each(function(author) {
            if (author.isValid()) {
                panel.add({
                    xtype: 'text',
                    tpl: '{firstName} {lastName}',
                    data: {
                        firstName: author.get('FirstName'),
                        lastName: author.get('LastName')
                    }
                });
                author.addresses().each(function(address) {
                    panel.add({
                        xtype: 'text',
                        text: address.get('City'),
                        style: 'font-weight: bold'
                    });
                });
            }
        });
    });

});
