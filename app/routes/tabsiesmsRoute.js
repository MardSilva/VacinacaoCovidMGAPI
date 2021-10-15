'use strict';
module.exports = function(app) {
  var tabsiesmsInstance = require('../controllers/tabsiesmsController');

  app.route('/tabsiesms')
    .get(tabsiesmsInstance.listAll)
    .post(tabsiesmsInstance.createNew);
   
   app.route('/tabsiesms/:FORNECEDOR')
    .get(tabsiesmsInstance.readById)
    .put(tabsiesmsInstance.updateById)
    .delete(tabsiesmsInstance.deleteById);

	app.route('/tabsiesms/search/:searchKey')
    .get(tabsiesmsInstance.search);
    };
