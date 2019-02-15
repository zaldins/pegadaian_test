'use strict';

const resstandard   = require('./resstandard');
const connection    = require('./connection');
const https         = require('https');
var xmldoc          = require('xmldoc');
var parseString = require('xml2js').parseString;


exports.simpleMinMax = function(req,res){

    let data            = req.body.array;
    let length_of_data  = data.length;
    
    data    = data.sort((a,b)=> a - b);
    
    let min_value = data[length_of_data-length_of_data];
    let max_value = data[length_of_data-1];

    let result = [{
        'max-value' : max_value,
        'min-value' : min_value
    }]
    resstandard.ok(result,res);
}

exports.submitMinMaxValueDB = function(req,res){
    let data = "\""+(req.body.array).toString()+"\"";
    let check = [];
    
    connection.query('SELECT * FROM tbl_array_data', function (error, rows, fields){
        if(error){
            console.log(error);
        }
        else{
            if(rows[0]===undefined){
                connection.query('INSERT INTO tbl_array_data(array_data) VALUES('+ data +')', function (error, rows, fields){
                    if(error){
                        console.log(error)
                    } else{
                        resstandard.ok(rows, res)
                    }
                });
            }
            else{
                let id = rows[0].id_array_data;
                connection.query('UPDATE tbl_array_data SET array_data='+ data +'WHERE id_array_data='+ id, function (error, rows, fields){
                    if(error){
                        console.log(error)
                    } else{
                        resstandard.ok(rows, res)
                    }
                });
            }
        }
    });

    
}

exports.findMinMaxValueDB = function(req,res){
    let data = {};

    connection.query('SELECT array_data FROM tbl_array_data', function (error, rows, fields){
        if(error){
            console.log(error);
        } else{                                                                              
            data = rows[0].array_data.split(",").map(function(item){
                return parseInt(item, 10);
            });

            let length_of_data  = data.length;
    
            data    = data.sort((a,b)=> a - b);
            let min_value = data[length_of_data-length_of_data];
            let max_value = data[length_of_data-1];

            let result = [{
                'max-value' : max_value,
                'min-value' : min_value
            }]
            resstandard.ok(result,res);
        }
    });
}

exports.checkDuplicateWord = function(req, res){
    let word = req.body.word;
    var a = [];

    var utf8 = unescape(encodeURIComponent(word));

    for (var i=0; i < utf8.length; i++) {
        a.push(utf8.charCodeAt(i));
    }

    let data_sort = a.sort((a,b)=> a - b);
    let maxData = data_sort.length;
    
    let result_String = '';

    for(let loop=0; loop<maxData; loop++ ){
        result_String = result_String.concat(String.fromCharCode(data_sort[loop]));
    }

    let result_chk = result_String.replace(/(.)\1*/g, function(m, $1){ return $1 + "[" + m.length + "]"});

    let result = [{
        'result' : result_chk
    }];

    resstandard.ok(result,res);
}

exports.checkWord = function(req,res){
    let result_string;
    let word = /^\d+$/.test(req.body.word);

    result_string = word ? 'number' : 'not number';

    let result = [{
        'result' : result_string
    }]
    resstandard.ok(result,res);
}

exports.getHistoricalRates = function(req,res){

    let endpoint = req.body.endpoint;

    https.get(endpoint, function(res) {
        var data = '';

        let date;
        let currency;
        let rate;

        res.on('data', function (chunk) {
            data += chunk;
        });

        res.on('end', function () {
            var document = new xmldoc.XmlDocument(data);
            var Cube = document.childNamed("Cube");

            var doc2 = new xmldoc.XmlDocument(Cube);
            var CubeContent = doc2.childNamed("Cube");


            doc2.eachChild(function(cube) {
                date = "\'" + (cube.attr.time) + "\'";

                CubeContent.eachChild(function(cube) {
                    
                    currency    = "\'" + (cube.attr.currency) + "\'";
                    rate        = "\'" + (cube.attr.rate) + "\'";

                    connection.query('INSERT INTO tbl_rates(date, currency, rate) VALUES('+ date + "," + currency + "," + rate +')', function (error, rows, fields){
                        if(error){
                            console.log(error)
                        } else{
                            console.log(rows);
                        }
                    });
                  });
              });
           
        });
    });

    let result = [{
        'success' : true
    }]
    resstandard.ok(result,res);
}