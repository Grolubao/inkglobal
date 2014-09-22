Ext.ns('Inkglobal.view');

/**
 * This is the ViewPort which is the responsible for the layout of all the components. After it is rendered, it will request to the
 * controller the list of Cities in order to populate the grid.
 *
 * @type {*}
 */
Inkglobal.view.Viewport = Ext.extend(Ext.Viewport, {
    layout: 'border',

    initComponent: function () {
        this.items = [this.createHeaderPanel(), this.createMainPanel()];

        this.on('render', function () {
            this.controller.loadListOfCitiesTemperatures(this);
            Ext.example.msg('Welcome to Ink', 'Please select a city...');
        }, this);

        Inkglobal.view.Viewport.superclass.initComponent.call(this);
    },

    createHeaderPanel: function () {
        return new Ext.Container({
            region: 'north',
            height: 100,
            items: [new Ext.form.Label({
                isFormField: true,
                cls: 'increasepadding',
                html: '<img src="src/css/images/logo.png"/>'
            })]
        })
    },

    createMainPanel: function () {
        return new Ext.Panel({
            region: 'center',
            layout: 'border',
            cls: 'increasepadding',
            splittable: true,
            defaults: {
                border: false
            },
            items: [
                this.createCitiesGridPanel(), this.createCityDetailsFormPanel()
            ]
        })
    },

    createCitiesGridPanel: function () {
        this.citiesGridPanel = new Inkglobal.view.CitiesGridPanel({
            title: 'Cities and Temperatures',
            region: 'west',
            split: true,
            collapsible: true,
            width: 450,
            listeners: {
                citySelected: function (record) {
                    this.detailsFormPanel.setSelectedRecord(record);
                },
                scope: this
            }
        });

        return this.citiesGridPanel;
    },

    createCityDetailsFormPanel: function () {
        this.detailsFormPanel = new Inkglobal.view.CityDetailsFormPanel({
            region: 'center'
        });

        return this.detailsFormPanel;
    },

    /**
     * Called by the controller to populate the data with the JSON that came from the weather station
     *
     * @param json
     */
    setData: function (json) {
        var records = [];

        Ext.each(json.list, function (city) {
            var record = new Ext.data.Record({
                name: city.name,
                lon: city.coord.lon,
                lat: city.coord.lat,
                temp: city.main.temp,
                temp_min: city.main.temp_min,
                temp_max: city.main.temp_max,
                pressure: city.main.pressure,
                humidity: city.main.humidity,
                weather: city.weather
            });
            records.push(record);
        });
        this.citiesGridPanel.getStore().removeAll();
        this.citiesGridPanel.getStore().add(records);
    }
});