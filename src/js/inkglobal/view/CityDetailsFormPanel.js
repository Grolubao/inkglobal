Ext.ns('Inkglobal.view');

/**
 * This defines the City Details FormPanel that will hold both the Fields regarding the weather details but also the weather conditions
 */
Inkglobal.view.CityDetailsFormPanel = Ext.extend(Ext.Panel, {
    title: 'City Details',
    layout: 'column',
    defaults: {
        border: false
    },

    initComponent: function () {
        this.items = [this.createColumn1(), this.createColumn2(), this.createWeatherConditionsGridPanel()];

        Inkglobal.view.CityDetailsFormPanel.superclass.initComponent.call(this);
    },

    createColumn1: function () {
        this.nameField = new Ext.form.DisplayField({
            fieldLabel: 'Name'
        });

        this.locationField = new Ext.form.DisplayField({
            fieldLabel: 'Location'
        });

        this.pressureField = new Ext.form.DisplayField({
            fieldLabel: 'Pressure'
        });

        return  new Ext.form.FormPanel({
            columnWidth: .5,
            cls: 'formpadding',
            items: [this.nameField, this.locationField, this.pressureField]
        });
    },

    createColumn2: function () {
        this.tempField = new Ext.form.DisplayField({
            fieldLabel: 'Temp'
        });

        this.tempRangeField = new Ext.form.DisplayField({
            fieldLabel: 'Temp Range'
        });

        this.humidityField = new Ext.form.DisplayField({
            fieldLabel: 'Humidity'
        });

        return  new Ext.form.FormPanel({
            columnWidth: .5,
            cls: 'formpadding',
            items: [this.tempField, this.tempRangeField, this.humidityField]
        });
    },

    /**
     * This is where the record is passed and then each field is populated with the correct value. Also the WeatherConditionsGridPanel
     * will be populated here
     *
     * @param record - Ext.data.Record
     */
    setSelectedRecord: function (record) {
        this.nameField.setValue(record.get('name'));
        this.locationField.setValue('Lon: ' + record.get('lon') + ' / Lat: ' + record.get('lat'));
        this.pressureField.setValue(record.get('pressure'));
        this.tempField.setValue(record.get('temp'));
        this.tempRangeField.setValue('Min: ' + record.get('temp_min') + ', Max: ' + record.get('temp_max'));
        this.humidityField.setValue(record.get('humidity'));

        var weatherRecords = [];
        Ext.each(record.get('weather'), function (weather) {
            weatherRecords.push(new Ext.data.Record({
                main: weather.main,
                icon: weather.icon
            }))
        });

        this.weatherConditionsGridPanel.getStore().removeAll();
        this.weatherConditionsGridPanel.getStore().add(weatherRecords);

    },

    createWeatherConditionsGridPanel: function () {
        this.weatherConditionsGridPanel = new Inkglobal.view.WeatherConditionsGridPanel({
            title: 'Weather Conditions',
            columnWidth: 1,
            height: 200
        });

        return this.weatherConditionsGridPanel;
    }

});