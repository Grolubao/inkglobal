Ext.ns('Inkglobal.view');

/**
 * This defines the WeatherConditionsGridPanel where all the Weather Conditions will be stored.
 */
Inkglobal.view.WeatherConditionsGridPanel = Ext.extend(Ext.grid.GridPanel, {
    viewConfig: {
        forceFit: true
    },
    initComponent: function () {
        this.model = new Inkglobal.model.WeatherConditionsModel();
        this.store = this.createStore();
        this.colModel = this.createColumnModel();

        Inkglobal.view.WeatherConditionsGridPanel.superclass.initComponent.call(this);
    },

    createStore: function () {
        return new Ext.data.ArrayStore({
            fields: this.model.getFields()
        })
    },

    createColumnModel: function () {
        return new Ext.grid.ColumnModel([
            {
                header: 'Description',
                sortable: true,
                dataIndex: 'main'
            },
            {
                header: 'Icon',
                sortable: true,
                dataIndex: 'icon',
                renderer: function (value, metaData) {
                    metaData.css = '_' + value;
                }
            }
        ]);
    }
});