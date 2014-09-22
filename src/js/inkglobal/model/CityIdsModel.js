Ext.ns('Inkglobal.model');

/**
 * This defines the CityIdsModel which will be used to get the list of ids in order to feed to the weather API
 */
Inkglobal.model.CityIdsModel = function () {
    this.fields = [
        'id', 'name'
    ];

    this.data = {
        'London': 2643741,
        'Luton': 2643339,
        'Manchester': 2643123,
        'Birmingham': 2655603
    };
};

Inkglobal.model.CityIdsModel.prototype.getListOfIdsJoined = function () {
    var joinedIds = [];

    for (var key in this.data) {
        if (this.data.hasOwnProperty(key)) {
            joinedIds.push(this.data[key]);
        }
    }

    return joinedIds.join(',');
};