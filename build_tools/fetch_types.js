var path  = require('path');
var http  = require('http');
var fs    = require('fs');

function getTypeData(type, url) {
  var file = fs.createWriteStream(path.join(__dirname, 'types', type + '.json'));
  var request = http.get(url, function(response) {
    response.pipe(file);
  });
}

function fetchTypes(types) {
  types.forEach(function (type) {
    getTypeData(type.name, type.url);
  });
}

var types = [{"url":"http://pokeapi.co/api/v2/type/1/","name":"normal"},{"url":"http://pokeapi.co/api/v2/type/2/","name":"fighting"},{"url":"http://pokeapi.co/api/v2/type/3/","name":"flying"},{"url":"http://pokeapi.co/api/v2/type/4/","name":"poison"},{"url":"http://pokeapi.co/api/v2/type/5/","name":"ground"},{"url":"http://pokeapi.co/api/v2/type/6/","name":"rock"},{"url":"http://pokeapi.co/api/v2/type/7/","name":"bug"},{"url":"http://pokeapi.co/api/v2/type/8/","name":"ghost"},{"url":"http://pokeapi.co/api/v2/type/9/","name":"steel"},{"url":"http://pokeapi.co/api/v2/type/10/","name":"fire"},{"url":"http://pokeapi.co/api/v2/type/11/","name":"water"},{"url":"http://pokeapi.co/api/v2/type/12/","name":"grass"},{"url":"http://pokeapi.co/api/v2/type/13/","name":"electric"},{"url":"http://pokeapi.co/api/v2/type/14/","name":"psychic"},{"url":"http://pokeapi.co/api/v2/type/15/","name":"ice"},{"url":"http://pokeapi.co/api/v2/type/16/","name":"dragon"},{"url":"http://pokeapi.co/api/v2/type/17/","name":"dark"},{"url":"http://pokeapi.co/api/v2/type/18/","name":"fairy"},{"url":"http://pokeapi.co/api/v2/type/10001/","name":"unknown"},{"url":"http://pokeapi.co/api/v2/type/10002/","name":"shadow"}];
fetchTypes(types);