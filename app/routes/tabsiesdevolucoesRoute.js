'use strict';
module.exports = function(app) {
  var tabsiesdevolucoesInstance = require('../controllers/tabsiesdevolucoesController');

  app.route('/tabsiesdevolucoes')
    .get(tabsiesdevolucoesInstance.listAll)
    .post(tabsiesdevolucoesInstance.createNew);
   
   app.route('/tabsiesdevolucoes/:Fornecedor')
    .get(tabsiesdevolucoesInstance.readById)
    .put(tabsiesdevolucoesInstance.updateById)
    .delete(tabsiesdevolucoesInstance.deleteById);

	app.route('/tabsiesdevolucoes/search/:searchKey')
    .get(tabsiesdevolucoesInstance.search);
    };
