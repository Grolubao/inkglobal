Ext.ns('Inkglobal.model');

/**
 * This defines the Cities Model. It will hold information about the cities
 */
Inkglobal.model.CitiesModel = function () {
    this.fields = [
        'name', 'lon', 'lat', 'temp', 'temp_min', 'temp_max', 'pressure', 'humidity', 'weather'
    ]
};

Inkglobal.model.CitiesModel.prototype.getFields = function () {
    return this.fields;
};