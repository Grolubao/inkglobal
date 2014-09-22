Ext.ns('Inkglobal.view');

/**
 * This defines the Cities GridPanel where the user can select a row and the details of the city will be fired as an event
 */
Inkglobal.view.CitiesGridPanel = Ext.extend(Ext.grid.GridPanel, {
    viewConfig: {
        forceFit: true
    },
    initComponent: function () {
        this.addEvents('citySelected');
        this.model = new Inkglobal.model.CitiesModel();
        this.store = this.createStore();
        this.colModel = this.createColumnModel();
        this.selModel = this.createSelectionModel();

        Inkglobal.view.CitiesGridPanel.superclass.initComponent.call(this);
    },

    createStore: function () {
        return new Ext.data.ArrayStore({
            root: 'data',
            fields: this.model.getFields()
        });
    },

    createColumnModel: function () {
        return new Ext.grid.ColumnModel([
            {
                header: 'Name',
                sortable: true,
                width: 200,
                dataIndex: 'name'
            },
            {
                header: 'Temperature',
                sortable: true,
                width: 125,
                dataIndex: 'temp'
            }
        ]);
    },

    createSelectionModel: function () {
        return new Ext.grid.RowSelectionModel({
            singleSelect: true,
            listeners: {
                scope: this,
                rowselect: function (selectionModel, rowIndex, record) {
                    this.fireEvent('citySelected', record);
                }
            }
        })
    }
});