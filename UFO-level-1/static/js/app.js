// from data.js
var tableData = data;

// create a variable to select the button
var button = d3.select("#filter-btn");

//variable to select the form
var form = d3.select("form");

//create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

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

	//append new information table
	filteredData.forEach(instance => {
		var row = tbody.append("tr");
		Object.entries(instance).forEach(([key, value]) => {
		var cell = row.append("td");
		cell.text(value);
		});
	});
};


