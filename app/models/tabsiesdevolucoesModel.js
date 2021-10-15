'user strict';
var sql = require('./newdb.js');
var url = require('url');
var helper = require('./helper');
//Tabsiesdevolucoes object constructor

var Tabsiesdevolucoes = function (req, tabsiesdevolucoes) {

    this.Fornecedor = tabsiesdevolucoes.Fornecedor;
    this.Codigo = tabsiesdevolucoes.Codigo;
    this.Municipio = tabsiesdevolucoes.Municipio;
    this.Dat = tabsiesdevolucoes.Dat;
    this.NEM = tabsiesdevolucoes.NEM;
    this.Mov = tabsiesdevolucoes.Mov;
    this.Empenho = tabsiesdevolucoes.Empenho;
    this.Nota_Fiscal = tabsiesdevolucoes.Nota_Fiscal;
    this.Lote = tabsiesdevolucoes.Lote;
    this.Validade = tabsiesdevolucoes.Validade;
    this.Quantidade = tabsiesdevolucoes.Quantidade;
    this.Valor = tabsiesdevolucoes.Valor;
};
Tabsiesdevolucoes.create = function (req, newTabsiesdevolucoes, result) {
    sql.query("INSERT INTO tabsiesdevolucoes set ?", newTabsiesdevolucoes, function (err, res) {

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
Tabsiesdevolucoes.getById = function (req, Fornecedor, result) {
    sql.query("SELECT  t.* FROM tabsiesdevolucoes t  WHERE t.Fornecedor= ? LIMIT 0,1", Fornecedor, function (err, res) {
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
Tabsiesdevolucoes.totalCount = function (req, result) {
    sql.query("SELECT count(*) TotalCount FROM tabsiesdevolucoes t  ", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};

Tabsiesdevolucoes.totalSearchCount = function (req, searchKey, result) {
    sql.query("SELECT count(*) TotalCount FROM tabsiesdevolucoes t  WHERE  LOWER(t.Fornecedor) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Codigo) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Municipio) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Dat) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.NEM) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Mov) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Empenho) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Nota_Fiscal) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Lote) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Validade) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Quantidade) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Valor) LIKE CONCAT('%','" + searchKey + "','%') ", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};

Tabsiesdevolucoes.getAll = function (req, offset, pageSize, result) {
    sql.query("SELECT  t.* FROM tabsiesdevolucoes t  LIMIT ?, ?", [offset, pageSize], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tabsiesdevolucoes : ', res);

            result(null, res);
        }
    });
};
Tabsiesdevolucoes.search = function (req, searchKey, offset, pageSize, result) {

    sql.query("SELECT  t.* FROM tabsiesdevolucoes t  WHERE  LOWER(t.Fornecedor) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Codigo) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Municipio) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Dat) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.NEM) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Mov) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Empenho) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Nota_Fiscal) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Lote) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Validade) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Quantidade) LIKE CONCAT('%','" + searchKey + "','%') OR LOWER(t.Valor) LIKE CONCAT('%','" + searchKey + "','%') LIMIT ?,?", [offset, pageSize], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tabsiesdevolucoes : ', res);

            result(null, res);
        }
    });
};
Tabsiesdevolucoes.updateById = function (req, Fornecedor, tabsiesdevolucoes, result) {
    sql.query("UPDATE tabsiesdevolucoes SET Fornecedor = ?,Codigo = ?,Municipio = ?,Dat = ?,NEM = ?,Mov = ?,Empenho = ?,Nota_Fiscal = ?,Lote = ?,Validade = ?,Quantidade = ?,Valor = ? WHERE Fornecedor= ?", [tabsiesdevolucoes.Fornecedor, tabsiesdevolucoes.Codigo, tabsiesdevolucoes.Municipio, tabsiesdevolucoes.Dat, tabsiesdevolucoes.NEM, tabsiesdevolucoes.Mov, tabsiesdevolucoes.Empenho, tabsiesdevolucoes.Nota_Fiscal, tabsiesdevolucoes.Lote, tabsiesdevolucoes.Validade, tabsiesdevolucoes.Quantidade, tabsiesdevolucoes.Valor, Fornecedor], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Tabsiesdevolucoes.remove = function (req, Fornecedor, result) {
    sql.query("DELETE FROM tabsiesdevolucoes Where Fornecedor=?", [Fornecedor], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Tabsiesdevolucoes;
