
function makeTableHeaders(){
	var tableDiv = document.getElementById("ufo-table");
	var tableElement = document.createElement("table");
	var tableHeaderRow = document.createElement("tr");
	
	for (key in dataSet[0]) {
		var tableHeader = document.createElement("th");
		tableHeader.innerText = key;	
		tableHeader.className = "th-lg";
		tableHeaderRow.appendChild(tableHeader);
	}
	
	tableElement.appendChild(tableHeaderRow);
	tableDiv.appendChild(tableElement);
};

function makeTableEntries(data){
	var tableDiv = document.getElementById("ufo-table");
	var tableElement = tableDiv.firstElementChild;
 	
	for (var i= 0 ; i < data.length ; i++) {
		var tableRow = document.createElement("tr");
		for (key in data[i]) { 	
			var tableEntry = document.createElement("td");	
			tableEntry.innerHTML = data[i][key];
			tableRow.appendChild(tableEntry);
		}
		tableElement.appendChild(tableRow);
	}
};

function getDateInInput(e) {
	
	var monthFromInput = document.getElementById("MonthEntry");
	var dayFromInput = document.getElementById("DayEntry");
	var yearFromInput = document.getElementById("YearEntry");

	dateString = String(Number(monthFromInput.value))+"/"+String(Number(dayFromInput.value))+"/"+String(Number(yearFromInput.value));
	
	console.log(dateString);

	// Search through and push into new array
	var newDataSet = []

	for (var i=0; i<dataSet.length;i++){

		if (dataSet[i].datetime==dateString) {
			newDataSet.push(dataSet[i])
		}
	}

	var tablediv = document.querySelector("#ufo-table")

	if (tablediv.hasChildNodes()){
		tablediv.removeChild(tablediv.firstChild)
		makeTableHeaders();
		makeTableEntries(newDataSet);	
	} else {
		makeTableHeaders();
		makeTableEntries(newDataSet);	
	}
}

//makeTableHeaders();
//makeTableEntries();
