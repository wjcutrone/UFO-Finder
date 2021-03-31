// from data.js
var tableData = data;

// create variables to select the buttons
var fbutton = d3.select("#filter-btn");
var rbutton = d3.select("#reset-btn");

//variable to select the form
var form = d3.select("form");

//create event handlers
fbutton.on("click", runEnter);
form.on("submit", runEnter);
rbutton.on("click", resetTable)


//create tbody variable
var tbody = d3.select("tbody");
tbody.html("");
	
//Have the whole table load at beginning
function homeData(instance) {
	const defaultData = tableData
	tableData.forEach(instance => {
		var row = tbody.append("tr");
		Object.entries(instance).forEach(([key, value]) => {
		var cell = row.append("td");
		cell.text(value);
		});
	});
};

homeData(tableData);

//Building the runEnter function
function runEnter() {

	// first prevent the page from refreshing 
	d3.event.preventDefault();

	//next, select input html element
	var inputElement = d3.select("#datetime");

	//then the value of the input element
	var inputValue = inputElement.property("value");

	//apply filtering to datetime
	var filteredData = tableData.filter(instance => instance.datetime === inputValue);
	console.log(filteredData);

	//create a variable for the table body
	var tbody = d3.select("tbody");
	tbody.html("");
	
	//append new information table
	filteredData.forEach(instance => {
		var row = tbody.append("tr");
		Object.entries(instance).forEach(([key, value]) => {
		var cell = row.append("td");
		cell.text(value);
		});
	});
};

//Building the reset function
function resetTable() {
	// first prevent the page from refreshing 
	d3.event.preventDefault();
	//create a variable for the table body, and have the table body clear out when reseting
	var tbody = d3.select("tbody");
	tbody.html("");
	//run the homedata function to fill the table with the default values
	homeData(tableData);
};

