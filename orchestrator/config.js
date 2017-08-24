/* jshint node: true */
"use strict";
var config = {};

config.perseo_fe = {
  url: 'http://perseo-fe:9090'
}

config.orion = {
  url: 'http://orion:1026',
  default_subscription_duration : "P1M"
}

config.mongo = {
  url: "mongodb://mongodb:27017/orchestrator"
}



module.exports = config;
