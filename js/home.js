/**
 * Created by ved on 24/7/15.
 */

var app= angular.module('editor',['ngSanitize']);
app.controller('homeCtrl',function($scope){
    $scope.content =[];
    $scope.printDiv = function() {
        var popupWin = window.open('', '_blank', 'width=300,height=300');
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + $scope.content + '</html>');
        popupWin.document.close();
    };

    $scope.bold = false;
    $scope.italic = false;

    var data;
    $scope.cut= function () {
         data = angular.copy($scope.text);
        $scope.content = '';
    };

    $scope.getSelectionText = function() {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        $scope.text = text;
        return text;
    };

    $scope.paste = function () {

        var cursorPosition = $('#area').prop("selectionStart");
        $scope.content = data;
    } ;


    $scope.leftIt = function () {
            $scope.class = 'left';
    };

    $scope.rightIt = function (d) {

            $scope.class = 'right';

    } ;
    $scope.centerIt = function () {
        $scope.class = 'center';
    } ;
    $scope.boldIt = function (d) {
        if($scope.bold){
            $scope.class = 'bold';
        } else {
            $scope.class = 'none';
        }

    } ;
    $scope.underline = function () {
        $scope.class = 'underline';
    } ;

    $scope.italicIt = function () {
        if($scope.italic){
            $scope.class = 'italic';
        } else {
            $scope.class = 'none';
        }
    };
    $scope.h1 = function () {
        $scope.class = 'h1';
    };




});