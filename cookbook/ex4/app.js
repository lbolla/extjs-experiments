Ext.onReady(function() {

    Ext.define('Chart', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'name',
            type: 'string'
        }, {
            name: 'value',
            type: 'int'
        }, {
            name: 'value2',
            type: 'int'
        }]
    });

    var store = Ext.create('Ext.data.Store', {
        model: 'Chart',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'chart.json',
            reader: {
                type: 'json',
                root: 'data'
            }
        }
    });

    var chart = Ext.create('Ext.chart.Chart', {
        animate: true,
        store: store,
        axes: [{
            type: 'Numeric',
            position: 'left',
            fields: ['value'],
            title: 'Value',
            minimum: 0,
            maximum: 25,
            decimals: 0
        }, {
            type: 'Category',
            position: 'bottom',
            fields: ['name'],
            title: 'Name'
        }],
        series: [{
            type: 'column',
            axis: 'left',
            xField: 'name',
            yField: 'value'
        }, {
            type: 'line',
            axis: 'left',
            xField: 'name',
            yField: 'value2',
            markerConfig: {
                type: 'cross',
                radius: 8
            }
        }]
    });

    var panel = Ext.create('Ext.panel.Panel', {
        title: 'Nice graph',
        width: 600,
        height: 400,
        layout: 'fit',
        style: 'margin: 10px',
        items: chart,
        renderTo: Ext.getBody()
    });

    Ext.TaskManager.start({
        run: function() { store.load(); },
        interval: 3000
    });

});
