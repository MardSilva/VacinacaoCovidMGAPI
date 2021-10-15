//Imports e declarações comuns
// tabsiesdevolucoes --- controller da tabela TabSiesDevolucoes.

'use strict';
var helper = require('../models/helper.js');
var TabsiesdevolucoesController = require('../models/tabsiesdevolucoesModel.js');

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
      TabsiesdevolucoesController.getAll(req, offset, pageSize, function (err, tabsiesdevolucoes) {

        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          var totalCount = 0;

          TabsiesdevolucoesController.totalCount(req, function (err, total) {
            if (err) {
              res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
            } else {
              if (total && total[0] && total[0].TotalCount && total[0].TotalCount > 0) {
                totalCount = total[0].TotalCount;
                var result = { records: tabsiesdevolucoes, pageNo: pageNo, pageSize: pageSize, totalCount: totalCount };
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
      TabsiesdevolucoesController.search(req, req.params.searchKey.toLowerCase(), offset, pageSize, function (err, tabsiesdevolucoes) {

        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          var totalCount = 0;
          TabsiesdevolucoesController.totalSearchCount(req, req.params.searchKey.toLowerCase(), function (err, total) {
            if (err) {
              res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
            } else {
              if (total && total[0] && total[0].TotalCount && total[0].TotalCount > 0) {
                totalCount = total[0].TotalCount;
                var result = { records: tabsiesdevolucoes, pageNo: pageNo, pageSize: pageSize, totalCount: totalCount };
                res.status(200).send(helper.createResponse(helper.Success, 1, "Registro encontrado", result));
              } else {
                res.status(200).send(helper.createResponse(helper.Error, 0, "Ops. nenhum registro foi encontrado", ""));
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
      var reqObj = new TabsiesdevolucoesController(req, req.body);
      var createObj = {

        Fornecedor: req.body.Fornecedor,
        Codigo: req.body.Codigo,
        Municipio: req.body.Municipio,
        Dat: req.body.Dat,
        NEM: req.body.NEM,
        Mov: req.body.Mov,
        Empenho: req.body.Empenho,
        Nota_Fiscal: req.body.Nota_Fiscal,
        Lote: req.body.Lote,
        Validade: req.body.Validade,
        Quantidade: req.body.Quantidade,
        Valor: req.body.Valor,
      };
      if (!createObj.Fornecedor || !createObj.Codigo || !createObj.Municipio || !createObj.Dat || !createObj.NEM || !createObj.Mov || !createObj.Empenho || !createObj.Nota_Fiscal || !createObj.Lote || !createObj.Validade || !createObj.Quantidade || !createObj.Valor) {

        res.status(400).send({ error: true, message: 'Por favor, preencha todos os campos obrigatórios.' });

      }
      else {

        TabsiesdevolucoesController.create(req, createObj, function (err, tabsiesdevolucoes) {

          if (err) {
            res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
          } else {
            res.status(200).send(helper.createResponse(helper.Success, 1, "Registro inserido.", tabsiesdevolucoes));
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
      TabsiesdevolucoesController.getById(req, req.params.Fornecedor, function (err, tabsiesdevolucoes) {
        if (err) {
          res.status(200).send(helper.createResponse(helper.Error, 0, err, ""));
        } else {
          res.status(200).send(helper.createResponse(helper.Success, 1, "Registro encontrado", tabsiesdevolucoes[0]));
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
      TabsiesdevolucoesController.updateById(req, req.params.Fornecedor, new TabsiesdevolucoesController(req, req.body), function (err, tabsiesdevolucoes) {
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
      TabsiesdevolucoesController.remove(req, req.params.Fornecedor, function (err, tabsiesdevolucoes) {
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
