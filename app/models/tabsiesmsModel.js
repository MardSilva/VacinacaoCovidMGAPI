'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Tabsiesms object constructor

var Tabsiesms = function (req, tabsiesms) {

    this.FORNECEDOR = tabsiesms.FORNECEDOR;
    this.FABRICANTE = tabsiesms.FABRICANTE;
    this.VACINA = tabsiesms.VACINA;
    this.DAT = tabsiesms.DAT;
    this.NFM = tabsiesms.NFM;
    this.MOV = tabsiesms.MOV;
    this.EMPENHO = tabsiesms.EMPENHO;
    this.NOTA_FISCAL = tabsiesms.NOTA_FISCAL;
    this.LOTE = tabsiesms.LOTE;
    this.VALIDADE = tabsiesms.VALIDADE;
    this.QUANTIDADE = tabsiesms.QUANTIDADE;
    this.VALOR = tabsiesms.VALOR;
};
Tabsiesms.create = function (req, newTabsiesms, result) {
    sql.query("INSERT INTO tabsiesms set ?", newTabsiesms, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Tabsiesms.getById = function (req, FORNECEDOR, result) {
    sql.query("SELECT  t.* FROM tabsiesms t  WHERE t.FORNECEDOR= ? LIMIT 0,1", FORNECEDOR, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else if (res && res.length > 0) {
            result(null, res);

        } else {
            result("Record Not Found", null);
        }
    });
};
Tabsiesms.totalCount = function (req, result) {
    sql.query("SELECT count(*) TotalCount FROM tabsiesms t  ", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};

Tabsiesms.totalSearchCount = function (req, searchKey, result) {
    sql.query("SELECT count(*) TotalCount FROM tabsiesms t  WHERE  LOWER(t.FORNECEDOR) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.FABRICANTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VACINA) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.DAT) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.NFM) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.MOV) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.EMPENHO) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.NOTA_FISCAL) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.LOTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VALIDADE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.QUANTIDADE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VALOR) LIKE CONCAT('%','" + searchKey + "','%') ", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};

Tabsiesms.getAll = function (req, offset, pageSize, result) {
    sql.query("SELECT  t.* FROM tabsiesms t  LIMIT ?, ?", [offset, pageSize], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tabsiesms : ', res);

            result(null, res);
        }
    });
};
Tabsiesms.search = function (req, searchKey, offset, pageSize, result) {

    sql.query("SELECT  t.* FROM tabsiesms t  WHERE  LOWER(t.FORNECEDOR) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.FABRICANTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VACINA) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.DAT) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.NFM) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.MOV) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.EMPENHO) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.NOTA_FISCAL) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.LOTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VALIDADE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.QUANTIDADE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VALOR) LIKE CONCAT('%','" + searchKey + "','%') LIMIT ?,?", [offset, pageSize], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tabsiesms : ', res);

            result(null, res);
        }
    });
};
Tabsiesms.updateById = function (req, FORNECEDOR, tabsiesms, result) {
    sql.query("UPDATE tabsiesms SET FORNECEDOR = ?,FABRICANTE = ?,VACINA = ?,DAT = ?,NFM = ?,MOV = ?,EMPENHO = ?,NOTA_FISCAL = ?,LOTE = ?,VALIDADE = ?,QUANTIDADE = ?,VALOR = ? WHERE FORNECEDOR= ?", [tabsiesms.FORNECEDOR, tabsiesms.FABRICANTE, tabsiesms.VACINA, tabsiesms.DAT, tabsiesms.NFM, tabsiesms.MOV, tabsiesms.EMPENHO, tabsiesms.NOTA_FISCAL, tabsiesms.LOTE, tabsiesms.VALIDADE, tabsiesms.QUANTIDADE, tabsiesms.VALOR, FORNECEDOR], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Tabsiesms.remove = function (req, FORNECEDOR, result) {
    sql.query("DELETE FROM tabsiesms Where FORNECEDOR=?", [FORNECEDOR], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Tabsiesms;
