// var express = require("express");
// var app = express();

var path = require("path");
var dataArry = require("../data/friends.js");

module.exports = function (app) {
    var newsurvey;
    app.get("/api/", function(req, res){
        res.json(dataArry);
    })
    app.post("/api/survey", function(req, res) {
        newsurvey = req.body;
        console.log(newsurvey);
        dataArry.push(newsurvey);
        var diffArr = [];
        for (let i = 0; i < dataArry.length-1; i++) {
            var diffSum = 0;
            var tem = dataArry[i].questions;
            for (let j = 0; j < 10; j++) {
                var tem2 = newsurvey.questions;
                diffSum += Math.abs(parseInt(tem2[j]) - parseInt(tem[j]));
            }
            diffArr.push(diffSum);
        }
        // console.log(diffArr);
        var minPosition=0;
        for(i = 0; i < diffArr.length; i++) {
            if(diffArr[i]< diffArr[minPosition]) {
                minPosition = i;
            }
        }
        // console.log( minPosition);
        // return minPosition; 
        console.log(dataArry[minPosition]);
        res.json(dataArry[minPosition]);
    });
}