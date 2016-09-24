$(document).ready(function() {
   
// Reverse below array of arrays
// Populate select element options dynamically.
// Created a reverse function in jQuery.
// Created a loop to colect values of planets for calculations. 

var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];  
planets.reverse();

$.each(planets, function(index, value) {
            $('<option/>').val(value[1]).html(value[0]).appendTo('#selectAPlanet');
            }); 

//Calculation using jQuery for weights per planets

$( "#btnCalculate" ).click(function() {
var yourWeight = $("#yourWeight").val();
var selectaPlanet = $("#selectAPlanet option:selected").html();
var gravity = $("#selectAPlanet option:selected").val();
var futureoutput = yourWeight * gravity;


 //Using jQuery to grab info from HTML within html tags using as string. 
$("#futureoutput").text( "If your were on " + selectaPlanet + " you would weigh " + futureoutput + "lbs!");



	});


});









