var Europa2008: number = 4965.7;
var Nordamerika2008: number = 6600.4;
var Südamerika2008: number = 1132.6;
var Afrika2008: number = 1028;
var Asien2008: number = 12954.7;
var Australien2008: number = 1993;

var Südamerika2018: number = 1261.5;
var Afrika2018: number = 1235.5;
var Asien2018: number = 16274.1;
var Australien2018: number = 2100.5;
var Europa2018: number = 4209.3;
var Nordamerika2018: number = 6035.6;

var Total2018: number = (Europa2018 + Nordamerika2018 + Südamerika2018 + Afrika2018 + Asien2018 + Australien2018);

var OpEurope: number = 100 - 14;
var OpNorthamerica: number = 100 - 19;
var OpSouthamerica: number = 100 - 4;
var OpAfrica: number = 100 - 4;
var OpAsia: number = 100 - 52;
var OpAustralia: number = 100 - 7;

window.onload = function () {
    document.getElementById("EU").addEventListener("click", myFunctionEuropa);
    document.getElementById("NA").addEventListener("click", myFunctionNordamerika);
    document.getElementById("SA").addEventListener("click", myFunctionSüdamerika);
    document.getElementById("Afrika").addEventListener("click", myFunctionAfrika);
    document.getElementById("Asien").addEventListener("click", myFunctionAsien);
    document.getElementById("AUS").addEventListener("click", myFunctionAustralien);
};

function myFunctionEuropa() {
    document.getElementById("Überschrift").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.getElementById("Beschreibung1").innerHTML = "Emission absolute of Europe in 2018";
    document.getElementById("Wert1").innerHTML = Europa2018 + " kg CO2";
    document.getElementById("Wert2").innerHTML = Math.round((Europa2018 * 100) / Total2018) + " %";
    document.getElementById("Wert3").innerHTML = Math.round((Europa2018 - Europa2008) / Europa2008 * 100) + " %";
    document.getElementById("Wert4").innerHTML = Math.round(Europa2018 - Europa2008) + "kg CO2";
    document.querySelector(".Wolke").setAttribute("style", "opacity:" + OpEurope + "%");
};
function myFunctionNordamerika() {
    document.getElementById("Überschrift").innerHTML = "Carbon Dioxide Emissions in Northamerica";
    document.getElementById("Beschreibung1").innerHTML = "Emission absolute of Northamerica in 2018";
    document.getElementById("Wert1").innerHTML = Nordamerika2018 + " kg CO2";
    document.getElementById("Wert2").innerHTML = Math.round((Nordamerika2018 * 100) / Total2018) + " %";
    document.getElementById("Wert3").innerHTML = Math.round((Nordamerika2018 - Nordamerika2008) / Nordamerika2008 * 100) + " %";
    document.getElementById("Wert4").innerHTML = Math.round(Nordamerika2018 - Nordamerika2008) + "kg CO2";
    document.querySelector(".Wolke").setAttribute("style", "opacity:" + OpNorthamerica + "%");
};
function myFunctionSüdamerika() {
    document.getElementById("Überschrift").innerHTML = "Carbon Dioxide Emissions in Southamerica";
    document.getElementById("Beschreibung1").innerHTML = "Emission absolute of Southamerica in 2018";
    document.getElementById("Wert1").innerHTML = Südamerika2018 + " kg CO2";
    document.getElementById("Wert2").innerHTML = Math.round((Südamerika2018 * 100) / Total2018) + " %";
    document.getElementById("Wert3").innerHTML = Math.round((Südamerika2018 - Südamerika2008) / Südamerika2008 * 100) + " %";
    document.getElementById("Wert4").innerHTML = Math.round(Südamerika2018 - Südamerika2008) + "kg CO2";
    document.querySelector(".Wolke").setAttribute("style", "opacity:" + OpSouthamerica + "%");
};
function myFunctionAfrika() {
    document.getElementById("Überschrift").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.getElementById("Beschreibung1").innerHTML = "Emission absolute of Africa in 2018";
    document.getElementById("Wert1").innerHTML = Afrika2018 + " kg CO2";
    document.getElementById("Wert2").innerHTML = Math.round((Afrika2018 * 100) / Total2018) + " %";
    document.getElementById("Wert3").innerHTML = Math.round((Afrika2018 - Afrika2008) / Afrika2008 * 100) + " %";
    document.getElementById("Wert4").innerHTML = Math.round(Afrika2018 - Afrika2008) + "kg CO2";
    document.querySelector(".Wolke").setAttribute("style", "opacity:" + OpAfrica + "%");
};
function myFunctionAsien() {
    document.getElementById("Überschrift").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.getElementById("Beschreibung1").innerHTML = "Emission absolute of Asia in 2018";
    document.getElementById("Wert1").innerHTML = Asien2018 + " kg CO2";
    document.getElementById("Wert2").innerHTML = Math.round((Asien2018 * 100) / Total2018) + " %";
    document.getElementById("Wert3").innerHTML = Math.round((Asien2018 - Asien2008) / Asien2008 * 100) + " %";
    document.getElementById("Wert4").innerHTML = Math.round(Asien2018 - Asien2008) + "kg CO2";
    document.querySelector(".Wolke").setAttribute("style", "opacity:" + OpAsia + "%");
};
function myFunctionAustralien() {
    document.getElementById("Überschrift").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.getElementById("Beschreibung1").innerHTML = "Emission absolute of Australia in 2018";
    document.getElementById("Wert1").innerHTML = Australien2018 + "kg Co2";
    document.getElementById("Wert2").innerHTML = Math.round((Australien2018 * 100) / Total2018) + " %";
    document.getElementById("Wert3").innerHTML = Math.round((Australien2018 - Australien2008) / Australien2008 * 100) + " %";
    document.getElementById("Wert4").innerHTML = Math.round(Australien2018 - Australien2008) + "kg CO2";
    document.querySelector(".Wolke").setAttribute("style", "opacity:" + OpAustralia + "%");
};


