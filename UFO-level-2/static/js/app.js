// from data.js
var tableData = data;

//create a variable for the table body
var tbody = d3.select("tbody");

// create a variable to select the button
var button = d3.select("#filter-btn");

//variable to select the form
// var form = d3.select("form");

//create event handlers
// button.on("click", runEnter);
// form.on("submit", runEnter);

//Building the runEnter function
function runEnter(data) {

	// first prevent the page from refreshing 
	d3.event.preventDefault();
	tbody.html("")
	//next, select input element
	//var inputElement = d3.select("#datetime");

	//then the value of the input element
	//var inputValue = inputElement.property("value");

	//apply filtering to datetime
	// var filteredData = tableData.filter(instance => instance.datetime === inputValue);
	// console.log(filteredData);

	//create a variable for the table body
	//var tbody = d3.select("tbody");

	//append new information table
	data.forEach(instance => {
		var row = tbody.append("tr");
		Object.entries(instance).forEach(([key,value]) => {
		var cell = row.append("td");
		cell.text(value);
		});
	});
};

//update filter function
var newfilters = []

function updateFilter() {
	var newInputElement = d3.select(this).select("input");
	var newInputValue = newInputElement.property("value");
	var filterID = newInputElement.attr("id");
	if (newInputValue) {
		newfilters[filterID] = newInputValue;
	} 
	else {
		delete newfilters[filterID];
	}
	filterTable();
}

function filterTable() {
	let filteredData = tableData//.filter(instance => instance.datetime === inputValue);
	//console.log(filteredData);

	//create a variable for the table body
	//var tbody = d3.select("tbody");
	Object.entries(newfilters).forEach(([key, value]) => {
		filteredData = filteredData.filter(row => row[key] === value);
	  });
	//append new information table
	// filteredData.forEach(instance => {
	// 	var row = tbody.append("tr");
	// 	Object.entries(instance).forEach(([key, value]) => {
	// 	var cell = row.append("td");
	// 	cell.text(value);
	// 	});
	// });
// };
	runEnter(filteredData);
}

d3.selectAll(".filter").on("change", updateFilter);
runEnter(tableData);