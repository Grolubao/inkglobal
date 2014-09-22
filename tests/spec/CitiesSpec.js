describe("Cities", function () {
    var citiesModel;
    var cityIdsModel;
    var cityDetailsFormPanel;

    beforeEach(function () {
        citiesModel = new Inkglobal.model.CitiesModel();
        cityIdsModel = new Inkglobal.model.CityIdsModel();
        cityDetailsFormPanel = new Inkglobal.view.CityDetailsFormPanel();
    });

    it("should be able to define what properties a city has", function () {
        expect(citiesModel.getFields()).toEqual([
            'name', 'lon', 'lat', 'temp', 'temp_min', 'temp_max', 'pressure', 'humidity', 'weather'
        ]);
    });

    it("should be able to retrieve the list of all ids from each city", function () {
        expect(cityIdsModel.getListOfIdsJoined()).toEqual('2643741,2643339,2643123,2655603');
    });

    it("should be able to set a selected record in the CityDetailsFormPanel", function () {
        var selectedRecord = new Ext.data.Record({
            name: 'London',
            lon: '1',
            lat: '2',
            temp: '10',
            temp_min: '5',
            temp_max: '15',
            pressure: '100',
            humidity: '100',
            weather: [
                {main: 'blizzard', icon: '10ng'}
            ]
        });

        expect(cityDetailsFormPanel.nameField.getValue()).toEqual('');
        expect(cityDetailsFormPanel.locationField.getValue()).toEqual('');
        expect(cityDetailsFormPanel.pressureField.getValue()).toEqual('');
        expect(cityDetailsFormPanel.tempField.getValue()).toEqual('');
        expect(cityDetailsFormPanel.tempRangeField.getValue()).toEqual('');
        expect(cityDetailsFormPanel.humidityField.getValue()).toEqual('');

        cityDetailsFormPanel.setSelectedRecord(selectedRecord);

        expect(cityDetailsFormPanel.nameField.getValue()).toEqual('London');
        expect(cityDetailsFormPanel.locationField.getValue()).toEqual('Lon: 1 / Lat: 2');
        expect(cityDetailsFormPanel.pressureField.getValue()).toEqual('100');
        expect(cityDetailsFormPanel.tempField.getValue()).toEqual('10');
        expect(cityDetailsFormPanel.tempRangeField.getValue()).toEqual('Min: 5, Max: 15');
        expect(cityDetailsFormPanel.humidityField.getValue()).toEqual('100');

    });
});
