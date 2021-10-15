'use strict';
module.exports = function(app) {
  var tabsiesursInstance = require('../controllers/tabsiesursController');

  app.route('/tabsiesurs')
    .get(tabsiesursInstance.listAll)
    .post(tabsiesursInstance.createNew);
   
   app.route('/tabsiesurs/:URS')
    .get(tabsiesursInstance.readById)
    .put(tabsiesursInstance.updateById)
    .delete(tabsiesursInstance.deleteById);

	app.route('/tabsiesurs/search/:searchKey')
    .get(tabsiesursInstance.search);
    };
