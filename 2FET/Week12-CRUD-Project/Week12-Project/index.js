// Week 10 Assignment
// Jair Alcon

const carList = [
	{
		id: 0,
		make: "Ford",
		model: "Fiesta",
		year: "2015"
	},
	{
		id: 1,
		make: "Geo",
		model: "Metro",
		year: "1992"
	},
	{
		id: 2,
		make: "Toyota",
		model: "Celica All-Trac Turbo",
		year: "1993"
	}
];

// console.log('This is the current array of Car Objects:', carList);

//This moves the cursor to the first input text browser is selected
$(document).ready(function () {
	$("#form-make-input").focus();
});

// RENDERING
$(() => {
	// render the array
	renderInventoryList()
})

const $vehiclesContainer = $("#vehicles-container");

function renderInventoryList() {
	// console.log('this is my carList in renderInventoryList function:', carList);
	$vehiclesContainer.empty()
	$vehiclesContainer.append(carList.map(car => renderCar(car)))
}


function renderCar(carParam) {
	// console.log('this is renderCar', carParam);
	// console.log(carParam.make);
	// console.log(carParam.model);
	// console.log(carParam.year);
	return $("<tr/>").append(
		$("<td/>").text(carParam.make),
		$("<td/>").text(carParam.model),
		$("<td/>").text(carParam.year),
		$("<td/>").append(
			$("<button/>").addClass("btn btn-danger me-2").attr("id", `${carParam.id}`).text("Delete").on("click", () => onDeleteButtonClick(carParam.id)),
			$("<button>").addClass("btn btn-primary").text("Edit").on("click", () => onStartVehicleEdit(carParam.id))
		)
	)
}

//* EVENT LISTENERS
// setting car Id to null for use later
const carModal = new bootstrap.Modal('#car-edit-modal');
const $carModalTitle = $("#car-modal-title");
// for text inputs
const $formMakeInput = $("#form-make-input");
const $formModelInput = $("#form-model-input");
const $formYearInput = $("#form-year-input");
// for modal inputs
const $modalMakeInput = $("#modal-make-input");
const $modalModelInput = $("#modal-model-input");
const $modalYearInput = $("#modal-year-input");

let editCarId = null;

function onSaveVehicle() {
	console.log('saving data inside of this function')
	// check if we're saving a create or an edit
	if (editCarId === null) {
		// get the name of the new movie
		// create a new movie and add it to the list
		carList.push({
			id: carList[carList.length - 1].id + 1, // hack
			make: $formMakeInput.val(),
			model: $formModelInput.val(),
			year: $formYearInput.val()
		});
		$formMakeInput.val('');
		$formModelInput.val('');
		$formYearInput.val('');

		// console logging the data that was just added
		let index = -1;
		console.log('Added this vehicle to table:', carList.at(index));

	}
	else {
		// Find the movie we're editing
		const car = carList.find(car => car.id === editCarId);
		// Update it with any edited info
		car.make = $modalMakeInput.val();
		car.model = $modalModelInput.val();
		car.year = $modalYearInput.val();
		console.log('Car values were changed to:', car)
	}

	// rerender the list of movies
	renderInventoryList();
	// close the modal
	carModal.hide();
}

function onStartVehicleEdit(vehicleId) {
	console.log('starting Edit process with ID:', vehicleId);
	// get the one that matches that id
	const car = carList.find(car => car.id === vehicleId);
	console.log('We are editing:', car)
	// open the modal
	carModal.show();
	// change the title of the modal
	$carModalTitle.text("Edit: " + car.make + ' ' + car.model + ' ' + car.year);
	// Put the vehicle's current data in the form
	$modalMakeInput.val(car.make),
	$modalModelInput.val(car.model),
	$modalYearInput.val(car.year)
	// Say that we're editing this one
	editCarId = car.id;
	console.log(editCarId);
}

function onDeleteButtonClick(carId) {
	console.log('we are inside the delete function', (carId))
	const indexToDelete = carList.findIndex(car => car.id === carId)
	// console logging the delete vehicle
	let index = 1;
	console.log('Deleting this vehicle from table:', carList.at(index));
	// removing from table
	carList.splice(indexToDelete, 1);
	renderInventoryList();
	// IF YOU'RE USING AN API: also let the backend know
	// fetch("http://localhost:3001/products/" + carId, { method: "DELETE" })
}

// This moves the cursor back to form-vehicle-make text input for the next entry
$("#add").click(function () {
	$formMakeInput.focus();
});

// Wait for document to load
$(document).ready(() => {
	$('.vehicle-form').on('submit', () => {

		// prevents default behaviour
		// Prevents event propagation
		return false;
	});
});
$('.vehicle-form').keypress((e) => {

	// Enter key corresponds to number 13
	if (e.which === 13) {
		onSaveVehicle();
		console.log('Form Successfully Submitted');
	}
	$("#form-make-input").focus();
})





// // will delete line in which ID resides in
// function onDeleteButtonClick(carIdToDelete) {
// 	console.log('id from car delete button', carIdToDelete);
// 	// I need to implement a method to remove the selected item from the array
// 	//remove element of carlist based on the id of the car
// 	/*
// 	loop through the carlist array and if the id of the car is
// 	equal to the id of the car to be removed, remove the car
// 	*/
// 	for (let i = 0; i < carList.length; i++) {
// 		if (carList[i].id == carIdToDelete) {
// 			console.log('car is being deleted:', carList[i])
// 			carList.splice(i, 1); //remove the car with id of 1
// 		}
// 		// rerender  inventory List
// 		return renderInventoryList();
// 	}
// }



// // This makes the cursor move to 'new-vehicle-make' text input after submitting current data
// // found solution here: https://www.techiedelight.com/set-focus-to-input-text-box-javascript/
// document.getElementById("add").onclick = function () {
// 	document.getElementById("form-make-input").focus();
// }

// // This allows the "ENTER" key to be used to submit data from text boxes
// window.addEventListener("keydown", function (event) {
// 	if (event.defaultPrevented) {
// 		return; // Do nothing if the event was already processed
// 	}
// 	switch (event.key) {		
// 		case "Enter":
// 			console.log('-----Enter key was pressed-----');
// 			// Do something for "enter" or "return" key press.
// 			// allows the "Enter" key to submit all HTML elements tags 'label' to submit data
// 			this.document.getElementsByTagName('label');
// 			// allows the document to create new container that holds the data in the text boxes
// 			this.document.getElementById('add').click();
// 			break;
// 		default:
// 			return; // Quit when this doesn't handle the key event.
// 	}
// 	// Cancel the default action to avoid it being handled twice
// 	event.preventDefault();
// }, true);

// // creating variable for assignment 
// let id = 0;

// document.getElementById('add').addEventListener('click', () => {
// 	// This assigns a new Text node to the variable createdVehicle
//     let createdVehicle = new Text();
// 	console.log('variable createdVehicle empty string =', createdVehicle);
    
//     // This stamps out a new container from the input text which will include the table header and code below
//     let table = document.getElementById('vehicle-table');
//     console.log('variable table = This is new container from input', table);

// 	// This is row 1 because row 0 is made above, which includes the th as row 0
//     let row = table.insertRow(1);
//     console.log('variable row = This is adding another row of data from text input', row);

// 	// This sets row id for the new data, will be referenced by delete button later
//     row.setAttribute('id', `item-${id}`);
// 	console.log('row.setAttribute: sets new ID to added item', 'id', `item-${id}`)

// 	// This takes the text from input new-vehicle-make and inserts it into column 0
//     row.insertCell(0).innerHTML = document.getElementById('new-vehicle-make').value;
// 	console.log('row.insertCell(0) =', document.getElementById('new-vehicle-make').value);

// 	// This takes the text from input new-vehicle-model and inserts it into column 1
//     row.insertCell(1).innerHTML = document.getElementById('new-vehicle-model').value;
// 	console.log('row.insertCell(1) =', document.getElementById('new-vehicle-model').value);

// 	// This takes the text from input new-vehicle-year and inserts it into column 2
//     row.insertCell(2).innerHTML = document.getElementById('new-vehicle-year').value;
// 	console.log('row.insertCell(2) =', document.getElementById('new-vehicle-year').value);

// 	// This adds an additional column space for the delete button
//     let actions = row.insertCell(3);
//     console.log('variable "actions" =', actions);

// 	// This adds the delete button and it's JS functionality into the html code
// 	// and increments the id tag assignment
//     actions.appendChild(createDeleteButton(id++));
// 	console.log('This appendsChild ', createDeleteButton(id++));

// 	// The 3 lines below reset text input boxes back to empty strings after submitting data
//     document.getElementById('new-vehicle-make').value = '';
//     document.getElementById('new-vehicle-model').value = '';
//     document.getElementById('new-vehicle-year').value = '';
// });

// function createDeleteButton(id) {

// 	// This creates a new button element
//     let btn = document.createElement('button');
// 	console.log(document.createElement('button'));

// 	// This inserts the class of 'btn btn-danger' into the button element
//     btn.className = 'btn btn-danger';
// 	console.log(btn.className);

// 	// This assigns an id to the button element
//     btn.id = id;
// 	console.log(btn.id);

// 	// This adds the text 'Remove' to the button
//     btn.innerHTML = 'Remove';
// 	console.log(btn.innerHTML);

// 	//
//     btn.onclick = () => {

// 		// this find the row associated with the button and assigns it to variable elementToDelete
//         let elementToDelete = document.getElementById(`item-${id}`);
				
// 		// this removes the corresponding row the delete button is inside of
//         elementToDelete.parentNode.removeChild(elementToDelete);
// 		console.log('Deleting :', elementToDelete);
//     };
// 	console.log(btn);
//     return btn;	
// }


/*
// function renderCursorOnLoad() {
// 	$cursorLoad.focus();
// }


// function cursorLoad() {
// 	document.getElementById("new-vehicle-make").focus();
// }

// $(() => {
// 	$('input[@type="text"]')[0].focus();
// 	// render the array
// 	cursorLoad();
// })

// $("#new-vehicle-make").on(function () {
// 	alert("Handler for .focus() called.");
// });

// document.onclick = function () {
// 	document.getElementById("new-vehicle-make").focus();
// }
*/