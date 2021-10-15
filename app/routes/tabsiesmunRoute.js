'use strict';
module.exports = function(app) {
  var tabsiesmunInstance = require('../controllers/tabsiesmunController');

  app.route('/tabsiesmun')
    .get(tabsiesmunInstance.listAll)
    .post(tabsiesmunInstance.createNew);
   
   app.route('/tabsiesmun/:MACRO')
    .get(tabsiesmunInstance.readById)
    .put(tabsiesmunInstance.updateById)
    .delete(tabsiesmunInstance.deleteById);

	app.route('/tabsiesmun/search/:searchKey')
    .get(tabsiesmunInstance.search);
    };
