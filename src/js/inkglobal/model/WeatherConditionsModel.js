Ext.ns('Inkglobal.model');

/**
 * This defines the WeatherConditionsModel which will be used to define the weather conditions since there can be many
 *
 */
Inkglobal.model.WeatherConditionsModel = function () {
    this.fields = [
        'main', 'icon'
    ]
};

Inkglobal.model.WeatherConditionsModel.prototype.getFields = function () {
    return this.fields;
};