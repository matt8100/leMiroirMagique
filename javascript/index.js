"use strict";
var d,
	year,
	numMonth,
	monthName = [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre"
    ],
	month,
	monthDays = [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ],
	daysofmonth,
	date,
	numDay,
	day = [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi"
    ],
	abrDay = [
        "dim",
        "lun",
        "mar",
        "mer",
        "jeu",
        "ven",
        "sam"
    ],
	numday0,
	numday1,
	numday2,
	numday3,
	numday4,
	hour,
	minute,
	zero,
	randGreet,
	randState,
	randCompl,
	greet = [
        "Bonjour,",
        "Bonne journée,",
        "Ça faisait longtemps,",
        "Ça fait un bail,",
        "Ça fait une éternité,",
        "Comment va,",
        "Hé,",
        "Heureuse année,",
        "Quelles nouvelles,",
        "Quoi de neuf,",
        "Qu’est-ce qui se passe,",
        "Salut,"
    ],
	state = [
        "ma beauté.",
        "ma belle.",
        "ma cherie.",
        "ma copine.",
        "madame.",
        "mon ami.",
        "mon amie.",
        "mon beau.",
        "mon cheri.",
        "mon copain.",
        "mon pote.",
        "monsieur."
    ],
	compl = [
        "Ça va?",
        "Comment allez-vous?",
        "Comment ça va?",
        "C’est toujours un plaisir de vous voir.",
        "Enchanté.",
        "Enchantée.",
        "J'ai de difficulté à trouver un compliment pour vous.",
        "Je m’excuse pour tous les tâches.",
        "Je suis étourdi par votre beauté.",
        "Je vous trouve magnifique.",
        "J’ai créé ça pour vous.",
        "Ne touche pas!",
        "Qu'est-ce que vous avez de beaux yeux.",
        "Que tu es belle!",
        "Qu’est-ce que je ferais sans toi?",
        "Votre sourire est contagieux.",
        "Votre sourire est un don.",
        "Vous avez un bon goût pour des miroirs!",
        "Vous êtes radieuse!",
        "Vous êtes si belle que vous regardez est une souffrance.",
        "Vous êtes vraiment belle.",
        "Vous m’avez manqué."
    ];
// updates time related variables
function time() {
	d = new Date();
	year = d.getFullYear();
	numMonth = d.getMonth();
	date = d.getDate();
	numDay = d.getDay();
	numday0 = d.getDay();
	numday1 = numday0 + 1;
	numday2 = numday0 + 2;
	numday3 = numday0 + 3;
	numday4 = numday0 + 4;
	hour = d.getHours();
	minute = d.getMinutes();
	if (minute <= 9) {
		zero = "0" + minute;
	} else {
		zero = minute;
	}
	month = monthName[numMonth];
	daysofmonth = monthDays[numMonth];
}
// removes "pause" class to start loadingscreen.gif fade animation
// enlève le "pause" catégorie pour commencer le loadingscreen.gif animation de faner
function loadingScreenOff() {
	var loading = document.getElementById("loading"),
		background = document.getElementById("background");
	loading.className = " ";
	loading.className = "out";
	background.className = " ";
	background.className = "out";
	console.log("Loading Screen Off");
}
// replaces "time" element inner content with the time
// remplace le contenu de l'élément "time" avec l'heure
function clock() {
	var time = document.getElementById("time");
	time.innerHTML = hour + ":" + zero;
}
// simpleWeather jQuery plugin par James Fleeting, simpleweatherjs.com
// configured to show forecast for five days
function weather(location) {
	var condcode0,
		condcode1,
		condcode2,
		condcode3,
		condcode4,
		icon = [
            '<i class="wi wi-tornado"></i>',
            '<i class="wi wi-storm-showers"></i>',
            '<i class="wi wi-tornado"></i>',
            '<i class="wi wi-thunderstorm"></i>',
            '<i class="wi wi-thunderstorm"></i>',
            '<i class="wi wi-snow"></i>',
            '<i class="wi wi-rain-mix"></i>',
            '<i class="wi wi-rain-mix"></i>',
            '<i class="wi wi-sprinkle"></i>',
            '<i class="wi wi-sprinkle"></i>',
            '<i class="wi wi-hail"></i>',
            '<i class="wi wi-showers"></i>',
            '<i class="wi wi-showers"></i>',
            '<i class="wi wi-snow"></i>',
            '<i class="wi wi-storm-showers"></i>',
            '<i class="wi wi-snow"></i>',
            '<i class="wi wi-snow"></i>',
            '<i class="wi wi-hail"></i>',
            '<i class="wi wi-hail"></i>',
            '<i class="wi wi-cloudy-gusts"></i>',
            '<i class="wi wi-fog"></i>',
            '<i class="wi wi-fog"></i>',
            '<i class="wi wi-fog"></i>',
            '<i class="wi wi-cloudy-gusts"></i>',
            '<i class="wi wi-cloudy-windy"></i>',
            '<i class="wi wi-thermometer"></i>',
            '<i class="wi wi-cloudy"></i>',
            '<i class="wi wi-night-cloudy"></i>',
            '<i class="wi wi-day-cloudy"></i>',
            '<i class="wi wi-night-cloudy"></i>',
            '<i class="wi wi-day-cloudy"></i>',
            '<i class="wi wi-night-clear"></i>',
            '<i class="wi wi-day-sunny"></i>',
            '<i class="wi wi-night-clear"></i>',
            '<i class="wi wi-day-sunny-overcast"></i>',
            '<i class="wi wi-hail"></i>',
            '<i class="wi wi-day-sunny"></i>',
            '<i class="wi wi-thunderstorm"></i>',
            '<i class="wi wi-thunderstorm"></i>',
            '<i class="wi wi-storm-showers"></i>',
            '<i class="wi wi-storm-showers"></i>',
            '<i class="wi wi-snow"></i>',
            '<i class="wi wi-snow"></i>',
            '<i class="wi wi-snow"></i>',
            '<i class="wi wi-cloudy"></i>',
            '<i class="wi wi-lightning"></i>',
            '<i class="wi wi-snow"></i>',
            '<i class="wi wi-thunderstorm"></i>',
            '<i class="wi wi-cloud"></i>',
            '<i class="wi na"></i>'
        ],
		fr = [
            'Tornade',
            'Tempête Tropicale',
            'Ouragan',
            'Orages Violents',
            'Orages',
            'Pluie et Neige',
            'Pluie et Grésil',
            'Neige et Grésil',
            'Bruine Verglaçante',
            'Bruine',
            'Pluie Verglaçante',
            'Averses',
            'Averses',
            'Averses de Neige',
            'Averses de Neige',
            'Neige Soufflante',
            'Neige',
            'Grêle',
            'Grésil',
            'Poussière',
            'Brumeux',
            'Brume',
            'Enfumé',
            'Venteux',
            'Venteux',
            'Froid',
            'Nuageux',
            'Surtout Nuageux',
            'Surtout Nuageux',
            'Partiellement Nuageux',
            'Partiellement Nuageux',
            'Clair',
            'Ensoleillé',
            'Beau',
            'Beau',
            'Pluie et Grêle',
            'Chaud',
            'Orages Isolés',
            'Orages Isolés',
            'Averses Épars',
            'Orages et Averses Éparses',
            'Neige Abondante',
            'Averses de Neige Éparses',
            'Neige Abondante',
            'Partiellement Nuageux',
            'Orages',
            'Averses de Neige',
            'Orages Isolés',
            'État pas disponible',
            'I don&#39,t envy translators.'
        ],
		info;
	$.simpleWeather({
		location: location,
		woeid: "",
		unit: "c",
		success: function (weather) {
			condcode0 = weather.code;
			condcode1 = weather.forecast[1].code;
			condcode2 = weather.forecast[2].code;
			condcode3 = weather.forecast[3].code;
			condcode4 = weather.forecast[4].code;
			if (numday1 >= 7) {
				numday1 -= 7;
			}
			if (numday2 >= 7) {
				numday2 -= 7;
			}
			if (numday3 >= 7) {
				numday3 -= 7;
			}
			if (numday4 >= 7) {
				numday4 -= 7;
			}
			info = "<h2 id='weatherhead'>" + icon[condcode0] + " " + weather.temp + "&deg;" + weather.units.temp + " " + fr[condcode0] + ", " + weather.city + ", " + weather.region + "</h2>";
			info += "<p class='weathercontent'>" + icon[condcode1] + " " + weather.forecast[1].high + "&deg;" + weather.units.temp + " à " + weather.forecast[1].low + "&deg;" + weather.units.temp + " " + fr[condcode1] + " " + day[numday1] + "</p>";
			info += "<p class='weathercontent'>" + icon[condcode2] + " " + weather.forecast[2].high + "&deg;" + weather.units.temp + " à " + weather.forecast[2].low + "&deg;" + weather.units.temp + " " + fr[condcode2] + " " + day[numday2] + "</p>";
			info += "<p class='weathercontent'>" + icon[condcode3] + " " + weather.forecast[3].high + "&deg;" + weather.units.temp + " à " + weather.forecast[3].low + "&deg;" + weather.units.temp + " " + fr[condcode3] + " " + day[numday3] + "</p>";
			info += "<p class='weathercontent'>" + icon[condcode4] + " " + weather.forecast[4].high + "&deg;" + weather.units.temp + " à " + weather.forecast[4].low + "&deg;" + weather.units.temp + " " + fr[condcode4] + " " + day[numday4] + "</p>";
			info += "<p id='lastup'>Dernière Mise au Point - " + hour + ":" + zero + "<br>Yahoo!</p>";
			$("#weather").html(info);
			console.log("Weather Updated");
		},
		error: function (error) {
			$("#weather").html('<p>' + error + '</p>');
			console.log("Weather Failed to Update");
		}
	});
}
// gets location
// trouve ton position
function loc() {
	if (navigator.geolocation) {
		weather("Richmond, BC");
		navigator.geolocation.getCurrentPosition(function (position) {
			weather(position.coords.latitude + "," + position.coords.longitude);
			console.log("Location received");
		}, function (error) {
			document.getElementById("lastup").innerHTML += "<p style=color:red;margin:0;>" + error.message + " Showing default location.</p>";
		});
	} else {
		console.log("Geolocation doesn't seemed to be supported.");
	}
}
// for loops fills calendar with dates
// calendrier 2017-01-15
function calendar() {
	var cdayoneinst = new Date(year, numMonth, 1),
		cdayone = cdayoneinst.getDay(),
		cmonthyear = document.getElementById("cmonthyear"),
		cdays = document.getElementById("cdays"),
        cdates = document.getElementById("cdates");

	function leap(year) {
		if (year % 4 === 0) {
			daysofmonth[1] = 29;
		}
	}

	function draw(cdayone, daysofmonth, date, month, year) {
		var numDate = 1,
			numCell = 1,
			numDay,
			row,
			column,
			today,
			cellMonthYear = month + " " + year,
			cellDay = "",
			cellDate = "";
		for (numDay = 0; numDay < 7; numDay++) {
			cellDay += "<td class='cdays'>" + abrDay[numDay] + "</td>";
		}
		for (row = 1; row <= Math.ceil((daysofmonth + cdayone - 1) / 7); row++) {
			cellDate += "<tr class='cdates'>";
			for (column = 1; column <= 7; column++) {
				if (numDate > daysofmonth) {
					break;
				}
				if (numCell < cdayone) {
					cellDate += '<td></td>';
					numCell++;
				} else {
					if (numDate === date) {
						cellDate += "<td class='ctoday cdates'>";
						cellDate += numDate;
						cellDate += '</td>';
						numDate++;
					} else {
						cellDate += "<td class='cdates'>" + numDate + "</td>";
						numDate++;
					}
				}
			}
			cellDate += "</tr>";
		}
		cmonthyear.innerHTML = cellMonthYear;
		cdays.innerHTML = cellDay;
        cdays.insertAdjacentHTML("afterend", cellDate);
	}
	draw(cdayone + 1, daysofmonth, date, month, year);
	console.log("Calendar Complete");
}
// randomize text choice numbers and refreshes "text" element text
// créer les nombres au hasard pour choisir la texte et réinitialiser l'élément "text"
function randomize() {
	randGreet = Math.floor(Math.random() * greet.length);
	randState = Math.floor(Math.random() * state.length);
	randCompl = Math.floor(Math.random() * compl.length);
	console.log("Randomization Complete");
}
// replaces inner contents of "text" element with a greeting and compliment
// remplace le contenu de l'élément "text" avec un salutation et un compliment
function greeting() {
	var text = document.getElementById("greeting");
	text.innerHTML = greet[randGreet] + " " + state[randState] + " " + compl[randCompl];
	console.log("Greeting Changed");
}

function randogreet() {
	randomize();
	greeting();
}

function hide(element) {
	if (element === 'weather') {
		document.getElementById(element).className = "animated slideOutLeft";
	}
	if (element === 'calendar') {
		document.getElementById(element).className = "animated slideOutRight";
	}
	if (element === 'greeting') {
		document.getElementById(element).className = "animated slideOutDown";
	}
	if (element === 'time') {
		document.getElementById(element).className = "animated slideOutUp";
	}
}

function show(element) {
	if (element === 'weather') {
		document.getElementById(element).className = "animated slideInLeft";
	}
	if (element === 'calendar') {
		document.getElementById(element).className = "animated slideInRight";
	}
	if (element === 'greeting') {
		document.getElementById(element).className = "animated slideInDown";
	}
	if (element === 'time') {
		document.getElementById(element).className = "animated slideInUp";
	}
}
// timed events
// fonctions prévu
function timer() {
	setTimeout(loadingScreenOff, 7620);
	time();
	setInterval(time, 1000);
	clock();
	setInterval(clock, 1000);
	loc();
	setInterval(loc, 1800000);
	calendar();
	randomize();
	setInterval(randomize, 900000);
	greeting();
	setInterval(greeting, 1800000);
}
if (annyang) {
	var en = {
			"speak in French": function () {
				annyang.setLanguage("fr-FR");
				console.log("fr");
			},
			"update the weather": loc,
			"tell me something else": randogreet,
			"hide the :element": hide,
			"show the :element": show
		},
		fr = {
			"parler en Anglais": function () {
				annyang.setLanguage("en-US");
				console.log("en");
			},
			"mettre à jour le météo": loc,
			"dis-moi d'autres choses": randogreet,
			"cacher le :element": hide,
			"cacher la :element": hide,
			"montrer le :element": show,
			"montrer la :element": show
		};
	annyang.addCommands(en);
	annyang.addCommands(fr);
	annyang.setLanguage("fr-FR");
	annyang.start();
	console.log("annyang is listening");
	annyang.addCallback('resultMatch', function (voice, command, other) {
		console.log(voice);
		console.log(command);
	});
	annyang.addCallback('resultMatch', function (error) {
		console.log(error);
	});
}
window.onload = timer;
