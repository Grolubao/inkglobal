Ext.ns('Inkglobal.controller');

/**
 * This defines the Cities Controller. It will be responsible for receiving the request to load the List of Cities from the view, performing
 * a JSONP call from the weather station and populate the view with the results
 *
 * @constructor
 */
Inkglobal.controller.CitiesController = function () {
    this.model = new Inkglobal.model.CityIdsModel();

    this.loadListOfCitiesTemperatures = function (viewPort) {
        JSONP.send('http://api.openweathermap.org/data/2.5/group?callback=callBackName&units=metric&id=' + this.model.getListOfIdsJoined(), {
            callbackName: 'callBackName',
            onSuccess: function (json) {
                viewPort.setData(json);
            }
        });
    }
};