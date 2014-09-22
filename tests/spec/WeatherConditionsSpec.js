describe("WeatherConditions", function () {
    var weatherConditionModel;

    beforeEach(function () {
        weatherConditionModel = new Inkglobal.model.WeatherConditionsModel();
    });

    it("should be able to define what properties a weather condition has", function () {
        expect(weatherConditionModel.getFields()).toEqual([
            'main', 'icon'
        ]);
    });

});
