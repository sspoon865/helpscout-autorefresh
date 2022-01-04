// ==UserScript==
// @author       Stephen
// @name         Auto Refresh Helpscout Reports
// @description  Refresh helpscout.net/reports/all-channels/ page automatically at a set interval.
// @version      0.1
// @match        *://secure.helpscout.net/reports/all-channels/*
// @namespace    https://github.com/sspoon865/helpscout-autorefresh
// @source       https://github.com/sspoon865/helpscout-autorefresh/blob/main/script.js
// @updateURL    https://github.com/sspoon865/helpscout-autorefresh
// @downloadURL  https://github.com/sspoon865/helpscout-autorefresh
// @supportURL   https://github.com/sspoon865/helpscout-autorefresh/issues
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
	'use strict';
	
	//Script configuration values
	const RATE	= 15; //Number of seconds before page automatically refreshes
	const RANGE = 7; //Number of days to compare to
	
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
	
	let d = new Date(); //Current date in milliseconds
	let e = new Date(d.now() - (86400000 * RANGE)); //Current date in milliseconds minus <RANGE> days
	let cd = new Date(e.now() - 86400000); //Date in milliseconds of next compared day (one day back from <e>)
	let ce = new Date(cd.now() - (86400000 * RANGE)); //Date in milliseconds of next compared day minus <RANGE> days
	
	let dYear = d.getFullYear(); //Current year
	let dMonth = d.getMonth() + 1; //Current month
	let dDay = d.getDate(); //Current date
	let eYear = e.getFullYear(); //Year as of <RANGE> days ago
	let eMonth = e.getMonth() + 1; //Month as of <RANGE> days ago
	let eDay = e.getDate(); //Date as of <RANGE> days ago
	let cdYear = cd.getFullYear(); //Year as of <RANGE> - 1 days ago
	let cdMonth = cd.getMonth() + 1; //Month as of <RANGE> - 1 days ago
	let cdDay = cd.getDate(); //Date as of <RANGE> - 1 days ago
	let ceYear = ce.getFullYear(); //Year as of <RANGE> - 1 - <RANGE> days ago
	let ceMonth = ce.getMonth() + 1; //Month as of <RANGE> - 1 - <RANGE> days ago
	let ceDay = ce.getDate(); //Date as of <RANGE> - 1 - <RANGE> days ago
	
	//Convert date values to string literals
	const START_DATE = `${dYear}-${dMonth}-${dDay}`;
	const END_DATE = `${eYear}-${eMonth}-${eDay}`;
	const CMPR_START_DATE = `${cdYear}-${cdMonth}-${cdDay}`;
	const CMPR_END_DATE = `${ceYear}-${ceMonth}-${ceDay}`;
	
	//Redirect to reports page using previous comparison dates at a set interval of <RATE> seconds
	setInterval(function () {window.location.href = `https://secure.helpscout.net/reports/all-channels/?customField1=19189&customField2=&range=${RANGE}&startDate=${END_DATE}&endDate=${START_DATE}&cmpRange=${RANGE}&cmpStartDate=${CMPR_END_DATE}&cmpEndDate=${CMPR_START_DATE}`;}, RATE * 1000);
})();