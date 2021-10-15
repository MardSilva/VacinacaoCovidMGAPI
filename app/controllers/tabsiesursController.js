//Imports e declarações comuns
// tabsiesmun --- controller da tabela TabSiesMun.

'use strict';
var helper = require('../models/helper.js');
var TabsiesursController = require('../models/tabsiesursModel.js');

exports.listAll = function (req, res) {
  helper.checkPermission(req, "v", function (isPermited) {
    if (isPermited) {
      var pageNo = 1;
      if (req.query && req.query.pageNo) {
        pageNo = parseInt(req.query.pageNo);
      }
      var pageSize = 30;
      if (req.query && req.query.pageSize) {
        pageSize = parseInt(req.query.pageSize);
      }
      var offset = (pageNo - 1) * pageSize;
      TabsiesursController.getAll(req, offset, pageSize, function (err, tabsiesurs) {

        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          var totalCount = 0;

          TabsiesursController.totalCount(req, function (err, total) {
            if (err) {
              res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
            } else {
              if (total && total[0] && total[0].TotalCount && total[0].TotalCount > 0) {
                totalCount = total[0].TotalCount;
                var result = { records: tabsiesurs, pageNo: pageNo, pageSize: pageSize, totalCount: totalCount };
                res.status(200).send(helper.createResponse(helper.Success, 1, "Registro encontrado", result));
              } else {
                res.status(200).send(helper.createResponse(helper.Error, 0, "Ops, nenhum registro foi encontrado.", ""));
              }
            }
          });
        }


      });
    } else {
      res.status(403).send(helper.createResponse(helper.Error, 0, helper.authError, ""));
    }
  });
};


exports.search = function (req, res) {
  helper.checkPermission(req, "v", function (isPermited) {
    if (isPermited) {
      var pageNo = 1;
      if (req.query && req.query.pageNo) {
        pageNo = parseInt(req.query.pageNo);
      }
      var pageSize = 30;
      if (req.query && req.query.pageSize) {
        pageSize = parseInt(req.query.pageSize);
      }
      var offset = (pageNo - 1) * pageSize;
      TabsiesursController.search(req, req.params.searchKey.toLowerCase(), offset, pageSize, function (err, tabsiesurs) {

        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          var totalCount = 0;
          TabsiesursController.totalSearchCount(req, req.params.searchKey.toLowerCase(), function (err, total) {
            if (err) {
              res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
            } else {
              if (total && total[0] && total[0].TotalCount && total[0].TotalCount > 0) {
                totalCount = total[0].TotalCount;
                var result = { records: tabsiesurs, pageNo: pageNo, pageSize: pageSize, totalCount: totalCount };
                res.status(200).send(helper.createResponse(helper.Success, 1, "Registro encontrado", result));
              } else {
                res.status(200).send(helper.createResponse(helper.Error, 0, "Ops, nenhum registro foi encontrado.", ""));
              }
            }
          });
        }


      });
    } else {
      res.status(403).send(helper.createResponse(helper.Error, 0, helper.authError, ""));
    }
  });
};

//objeto da Controller

exports.createNew = function (req, res) {
  helper.checkPermission(req, "a", function (isPermited) {
    if (isPermited) {
      var reqObj = new TabsiesursController(req, req.body);
      var createObj = {

        URS: req.body.URS,
        REQUISITANTE: req.body.REQUISITANTE,
        NFM: req.body.NFM,
        FABRICANTE: req.body.FABRICANTE,
        VACINA: req.body.VACINA,
        DAT: req.body.DAT,
        MOV: req.body.MOV,
        LOTE: req.body.LOTE,
        VALIDADE: req.body.VALIDADE,
        QUANTIDADE: req.body.QUANTIDADE,
        VALOR: req.body.VALOR,
      };
      if (!createObj.URS || !createObj.REQUISITANTE || !createObj.NFM || !createObj.FABRICANTE || !createObj.VACINA || !createObj.DAT || !createObj.MOV || !createObj.LOTE || !createObj.VALIDADE || !createObj.QUANTIDADE || !createObj.VALOR) {

        res.status(400).send({ error: true, message: 'Por favor, preencha os campos obrigatórios.' });

      }
      else {

        TabsiesursController.create(req, createObj, function (err, tabsiesurs) {

          if (err) {
            res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
          } else {
            res.status(200).send(helper.createResponse(helper.Success, 1, "Registro inserido.", tabsiesurs));
          }
        });
      }
    } else {
      res.status(403).send(helper.createResponse(helper.Error, 0, helper.authError, ""));
    }
  });
};


exports.readById = function (req, res) {
  helper.checkPermission(req, "v", function (isPermited) {
    if (isPermited) {
      TabsiesursController.getById(req, req.params.URS, function (err, tabsiesurs) {
        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          res.status(200).send(helper.createResponse(helper.Success, 1, "Registro encontrado", tabsiesurs[0]));
        }
      });
    } else {
      res.status(403).send(helper.createResponse(helper.Error, 0, helper.authError, ""));
    }
  });
};


exports.updateById = function (req, res) {
  helper.checkPermission(req, "u", function (isPermited) {
    if (isPermited) {
      TabsiesursController.updateById(req, req.params.URS, new TabsiesursController(req, req.body), function (err, tabsiesurs) {
        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          res.status(200).send(helper.createResponse(helper.Success, 1, "O registro foi atualizado com sucesso.", ""));
        }
      });
    } else {
      res.status(403).send(helper.createResponse(helper.Error, 0, helper.authError, ""));
    }
  });
};


exports.deleteById = function (req, res) {
  helper.checkPermission(req, "d", function (isPermited) {
    if (isPermited) {
      TabsiesursController.remove(req, req.params.URS, function (err, tabsiesurs) {
        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          res.status(200).send(helper.createResponse(helper.Success, 1, "O registro foi excluído com sucesso.", ""));
        }
      });
    } else {
      res.status(403).send(helper.createResponse(helper.Error, 0, helper.authError, ""));
    }
  });
};
