'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Tabsiesmun object constructor

var Tabsiesmun = function (req, tabsiesmun) {

    this.MACRO = tabsiesmun.MACRO;
    this.MICRO = tabsiesmun.MICRO;
    this.URS = tabsiesmun.URS;
    this.CODIGO = tabsiesmun.CODIGO;
    this.MUNICIPIO = tabsiesmun.MUNICIPIO;
    this.MATERIAL = tabsiesmun.MATERIAL;
    this.REQUISITANTE = tabsiesmun.REQUISITANTE;
    this.NFM = tabsiesmun.NFM;
    this.FABRICANTE = tabsiesmun.FABRICANTE;
    this.VACINA = tabsiesmun.VACINA;
    this.DAT = tabsiesmun.DAT;
    this.MOV = tabsiesmun.MOV;
    this.LOTE = tabsiesmun.LOTE;
    this.VALIDADE = tabsiesmun.VALIDADE;
    this.QUANTIDADE = tabsiesmun.QUANTIDADE;
    this.VALOR = tabsiesmun.VALOR;
};
Tabsiesmun.create = function (req, newTabsiesmun, result) {
    sql.query("INSERT INTO tabsiesmun set ?", newTabsiesmun, function (err, res) {

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
Tabsiesmun.getById = function (req, MACRO, result) {
    sql.query("SELECT  t.* FROM tabsiesmun t  WHERE t.MACRO= ? LIMIT 0,1", MACRO, function (err, res) {
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
Tabsiesmun.totalCount = function (req, result) {
    sql.query("SELECT count(*) TotalCount FROM tabsiesmun t  ", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};

Tabsiesmun.totalSearchCount = function (req, searchKey, result) {
    sql.query("SELECT count(*) TotalCount FROM tabsiesmun t  WHERE  LOWER(t.MACRO) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.MICRO) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.URS) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.CODIGO) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.MUNICIPIO) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.MATERIAL) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.REQUISITANTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.NFM) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.FABRICANTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VACINA) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.DAT) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.MOV) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.LOTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VALIDADE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.QUANTIDADE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VALOR) LIKE CONCAT('%','" + searchKey + "','%') ", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};

Tabsiesmun.getAll = function (req, offset, pageSize, result) {
    sql.query("SELECT  t.* FROM tabsiesmun t  LIMIT ?, ?", [offset, pageSize], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tabsiesmun : ', res);

            result(null, res);
        }
    });
};
Tabsiesmun.search = function (req, searchKey, offset, pageSize, result) {

    sql.query("SELECT  t.* FROM tabsiesmun t  WHERE  LOWER(t.MACRO) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.MICRO) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.URS) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.CODIGO) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.MUNICIPIO) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.MATERIAL) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.REQUISITANTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.NFM) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.FABRICANTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VACINA) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.DAT) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.MOV) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.LOTE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VALIDADE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.QUANTIDADE) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.VALOR) LIKE CONCAT('%','" + searchKey + "','%') LIMIT ?,?", [offset, pageSize], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tabsiesmun : ', res);

            result(null, res);
        }
    });
};
Tabsiesmun.updateById = function (req, MACRO, tabsiesmun, result) {
    sql.query("UPDATE tabsiesmun SET MACRO = ?,MICRO = ?,URS = ?,CODIGO = ?,MUNICIPIO = ?,MATERIAL = ?,REQUISITANTE = ?,NFM = ?,FABRICANTE = ?,VACINA = ?,DAT = ?,MOV = ?,LOTE = ?,VALIDADE = ?,QUANTIDADE = ?,VALOR = ? WHERE MACRO= ?", [tabsiesmun.MACRO, tabsiesmun.MICRO, tabsiesmun.URS, tabsiesmun.CODIGO, tabsiesmun.MUNICIPIO, tabsiesmun.MATERIAL, tabsiesmun.REQUISITANTE, tabsiesmun.NFM, tabsiesmun.FABRICANTE, tabsiesmun.VACINA, tabsiesmun.DAT, tabsiesmun.MOV, tabsiesmun.LOTE, tabsiesmun.VALIDADE, tabsiesmun.QUANTIDADE, tabsiesmun.VALOR, MACRO], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Tabsiesmun.remove = function (req, MACRO, result) {
    sql.query("DELETE FROM tabsiesmun Where MACRO=?", [MACRO], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Tabsiesmun;
