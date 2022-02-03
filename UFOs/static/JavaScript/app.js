// import the data from data.js
const tableData= data;

// Rederence the HTML table using d3
var tbody= d3.select("tbody");

function buildTable(data){
    // First, clear out any exitsting data
    tbody.html("");

// Nect, loop through each object in the data
// and append a row and cells for each value in the row
 data.forEach((dataRow) =>{
    // Append a row to the table body
    let row= tbody.append("tr");
    
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val)=> {
        let cell= row.append("td");
        cell.text(val);
    });
 });
}

function handleClick(){
    let date= d3.select("#datetime").property("value");
    let filteredData= tableData;
    
    // psuedocode practice
    // if (a date is entere){
        // Filter the default data to show only the date entered
    // }
    if (date){
        filterData= filteredData.filter(row => row.datetime === date);
    };
    // Rebuld the table using the filtered data
    buildTable(filteredData);

    // Attach an event to listen for the form button
    d3.selectAll("filter-btn").on("click", handleClick);

    // Build the table when the page loads
    buildTable(tableData);

};


