//Imports e declarações comuns
// tabsiesmun --- controller da tabela TabSiesMun.

'use strict';
var helper = require('../models/helper.js');
var TabsiesmunController = require('../models/tabsiesmunModel.js');

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
      TabsiesmunController.getAll(req, offset, pageSize, function (err, tabsiesmun) {

        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          var totalCount = 0;

          TabsiesmunController.totalCount(req, function (err, total) {
            if (err) {
              res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
            } else {
              if (total && total[0] && total[0].TotalCount && total[0].TotalCount > 0) {
                totalCount = total[0].TotalCount;
                var result = { records: tabsiesmun, pageNo: pageNo, pageSize: pageSize, totalCount: totalCount };
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
      TabsiesmunController.search(req, req.params.searchKey.toLowerCase(), offset, pageSize, function (err, tabsiesmun) {

        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          var totalCount = 0;
          TabsiesmunController.totalSearchCount(req, req.params.searchKey.toLowerCase(), function (err, total) {
            if (err) {
              res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
            } else {
              if (total && total[0] && total[0].TotalCount && total[0].TotalCount > 0) {
                totalCount = total[0].TotalCount;
                var result = { records: tabsiesmun, pageNo: pageNo, pageSize: pageSize, totalCount: totalCount };
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
      var reqObj = new TabsiesmunController(req, req.body);
      var createObj = {

        MACRO: req.body.MACRO,
        MICRO: req.body.MICRO,
        URS: req.body.URS,
        CODIGO: req.body.CODIGO,
        MUNICIPIO: req.body.MUNICIPIO,
        MATERIAL: req.body.MATERIAL,
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
      if (!createObj.MACRO || !createObj.MICRO || !createObj.URS || !createObj.CODIGO || !createObj.MUNICIPIO || !createObj.MATERIAL || !createObj.REQUISITANTE || !createObj.NFM || !createObj.FABRICANTE || !createObj.VACINA || !createObj.DAT || !createObj.MOV || !createObj.LOTE || !createObj.VALIDADE || !createObj.QUANTIDADE || !createObj.VALOR) {

        res.status(400).send({ error: true, message: 'Por favor, preencha todos os campos obrigatórios.' });

      }
      else {

        TabsiesmunController.create(req, createObj, function (err, tabsiesmun) {

          if (err) {
            res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
          } else {
            res.status(200).send(helper.createResponse(helper.Success, 1, "Registro inserido.", tabsiesmun));
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
      TabsiesmunController.getById(req, req.params.MACRO, function (err, tabsiesmun) {
        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          res.status(200).send(helper.createResponse(helper.Success, 1, "Registro encontrado", tabsiesmun[0]));
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
      TabsiesmunController.updateById(req, req.params.MACRO, new TabsiesmunController(req, req.body), function (err, tabsiesmun) {
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
      TabsiesmunController.remove(req, req.params.MACRO, function (err, tabsiesmun) {
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
