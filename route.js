'use strict';

module.exports = function(app) {
    const controller = require('./controller');

    app.route('/api/1/simpleMinMax').post(controller.simpleMinMax);

    app.route('/api/1/findMinMax').post(controller.submitMinMaxValueDB);
    app.route('/api/1/findMinMax').get(controller.findMinMaxValueDB);
    app.route('/api/1/checkDuplicate').post(controller.checkDuplicateWord);
    app.route('/api/1/checkWord').post(controller.checkWord);
    app.route('/api/1/getHisRate').get(controller.getHistoricalRates);
}