'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Tabsiesurs object constructor

var Tabsiesurs = function (req, tabsiesurs) {

    this.URS = tabsiesurs.URS;
    this.REQUISITANTE = tabsiesurs.REQUISITANTE;
    this.NFM = tabsiesurs.NFM;
    this.FABRICANTE = tabsiesurs.FABRICANTE;
    this.VACINA = tabsiesurs.VACINA;
    this.DAT = tabsiesurs.DAT;
    this.MOV = tabsiesurs.MOV;
    this.LOTE = tabsiesurs.LOTE;
    this.VALIDADE = tabsiesurs.VALIDADE;
    this.QUANTIDADE = tabsiesurs.QUANTIDADE;
    this.VALOR = tabsiesurs.VALOR;
};
Tabsiesurs.create = function (req, newTabsiesurs, result) {
    sql.query("INSERT INTO tabsiesurs set ?", newTabsiesurs, function (err, res) {

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
Tabsiesurs.getById = function (req, URS, result) {
    sql.query("SELECT  t.* FROM tabsiesurs t  WHERE t.URS= ? LIMIT 0,1", URS, function (err, res) {
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
Tabsiesurs.totalCount = function (req, result) {
    sql.query("SELECT count(*) TotalCount FROM tabsiesurs t  ", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};

Tabsiesurs.totalSearchCount = function (req, searchKey, result) {
    sql.query("SELECT count(*) TotalCount FROM tabsiesurs t  WHERE  LOWER(t.URS) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.REQUISITANTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.NFM) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.FABRICANTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VACINA) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.DAT) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.MOV) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.LOTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VALIDADE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.QUANTIDADE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VALOR) LIKE CONCAT('%','" + searchKey + "','%') ", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};

Tabsiesurs.getAll = function (req, offset, pageSize, result) {
    sql.query("SELECT  t.* FROM tabsiesurs t  LIMIT ?, ?", [offset, pageSize], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tabsiesurs : ', res);

            result(null, res);
        }
    });
};
Tabsiesurs.search = function (req, searchKey, offset, pageSize, result) {

    sql.query("SELECT  t.* FROM tabsiesurs t  WHERE  LOWER(t.URS) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.REQUISITANTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.NFM) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.FABRICANTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VACINA) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.DAT) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.MOV) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.LOTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VALIDADE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.QUANTIDADE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VALOR) LIKE CONCAT('%','" + searchKey + "','%') LIMIT ?,?", [offset, pageSize], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tabsiesurs : ', res);

            result(null, res);
        }
    });
};
Tabsiesurs.updateById = function (req, URS, tabsiesurs, result) {
    sql.query("UPDATE tabsiesurs SET URS = ?,REQUISITANTE = ?,NFM = ?,FABRICANTE = ?,VACINA = ?,DAT = ?,MOV = ?,LOTE = ?,VALIDADE = ?,QUANTIDADE = ?,VALOR = ? WHERE URS= ?", [tabsiesurs.URS, tabsiesurs.REQUISITANTE, tabsiesurs.NFM, tabsiesurs.FABRICANTE, tabsiesurs.VACINA, tabsiesurs.DAT, tabsiesurs.MOV, tabsiesurs.LOTE, tabsiesurs.VALIDADE, tabsiesurs.QUANTIDADE, tabsiesurs.VALOR, URS], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Tabsiesurs.remove = function (req, URS, result) {
    sql.query("DELETE FROM tabsiesurs Where URS=?", [URS], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Tabsiesurs;
