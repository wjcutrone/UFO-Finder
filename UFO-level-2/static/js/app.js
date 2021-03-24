// create variable for data.js
var tableData = data;

// create a variable for the table body
var tbody = d3.select("tbody");

// create a variable for the button
var button = d3.select("#filter-btn");

// create a variable for the form
var form = d3.select("form");

//create the event handler
d3.selectAll(".filter").on("change", //function to update the filer);
runEnter();

//Build a runEnter function when the user submits entry
function runEnter(instance) {
    //first prevent automatic refreshing
    d3.event.preventDefault();
    //When the user submits, have the new information append to the table
    data.forEach(instance => {
        var row = tbody.append("tr");
        Object.entries(instance).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });    
};

