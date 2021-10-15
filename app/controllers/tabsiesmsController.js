//Imports e declarações comuns
// tabsiesms --- controller da tabela TabSiesMS.

'use strict';
var helper = require('../models/helper.js');
var TabsiesmsController = require('../models/tabsiesmsModel.js');

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
      TabsiesmsController.getAll(req, offset, pageSize, function (err, tabsiesms) {

        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          var totalCount = 0;

          TabsiesmsController.totalCount(req, function (err, total) {
            if (err) {
              res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
            } else {
              if (total && total[0] && total[0].TotalCount && total[0].TotalCount > 0) {
                totalCount = total[0].TotalCount;
                var result = { records: tabsiesms, pageNo: pageNo, pageSize: pageSize, totalCount: totalCount };
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
      TabsiesmsController.search(req, req.params.searchKey.toLowerCase(), offset, pageSize, function (err, tabsiesms) {

        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          var totalCount = 0;
          TabsiesmsController.totalSearchCount(req, req.params.searchKey.toLowerCase(), function (err, total) {
            if (err) {
              res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
            } else {
              if (total && total[0] && total[0].TotalCount && total[0].TotalCount > 0) {
                totalCount = total[0].TotalCount;
                var result = { records: tabsiesms, pageNo: pageNo, pageSize: pageSize, totalCount: totalCount };
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
      var reqObj = new TabsiesmsController(req, req.body);
      var createObj = {

        FORNECEDOR: req.body.FORNECEDOR,
        FABRICANTE: req.body.FABRICANTE,
        VACINA: req.body.VACINA,
        DAT: req.body.DAT,
        NFM: req.body.NFM,
        MOV: req.body.MOV,
        EMPENHO: req.body.EMPENHO,
        NOTA_FISCAL: req.body.NOTA_FISCAL,
        LOTE: req.body.LOTE,
        VALIDADE: req.body.VALIDADE,
        QUANTIDADE: req.body.QUANTIDADE,
        VALOR: req.body.VALOR,
      };
      if (!createObj.FORNECEDOR || !createObj.FABRICANTE || !createObj.VACINA || !createObj.DAT || !createObj.NFM || !createObj.MOV || !createObj.EMPENHO || !createObj.NOTA_FISCAL || !createObj.LOTE || !createObj.VALIDADE || !createObj.QUANTIDADE || !createObj.VALOR) {

        res.status(400).send({ error: true, message: 'Por favor, preencha todos os campos obrigatórios.' });

      }
      else {

        TabsiesmsController.create(req, createObj, function (err, tabsiesms) {

          if (err) {
            res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
          } else {
            res.status(200).send(helper.createResponse(helper.Success, 1, "Registro inserido", tabsiesms));
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
      TabsiesmsController.getById(req, req.params.FORNECEDOR, function (err, tabsiesms) {
        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          res.status(200).send(helper.createResponse(helper.Success, 1, "Registro encontrado", tabsiesms[0]));
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
      TabsiesmsController.updateById(req, req.params.FORNECEDOR, new TabsiesmsController(req, req.body), function (err, tabsiesms) {
        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          res.status(200).send(helper.createResponse(helper.Success, 1, "O registro foi atualizado.", ""));
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
      TabsiesmsController.remove(req, req.params.FORNECEDOR, function (err, tabsiesms) {
        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          res.status(200).send(helper.createResponse(helper.Success, 1, "O registro foi removido com sucesso.", ""));
        }
      });
    } else {
      res.status(403).send(helper.createResponse(helper.Error, 0, helper.authError, ""));
    }
  });
};
