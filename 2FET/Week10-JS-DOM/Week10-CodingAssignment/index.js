// Week 10 Codign Assignment
// Jair Alcon
let id = 0;

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return console.log('pressing a key'); // Should do nothing if the default action has been cancelled
    }

    let handled = false;
    if (event.key !== undefined) {
        // Handle the event with KeyboardEvent.key
        handled = true;
    } else if (event.keyCode !== undefined) {
        // Handle the event with KeyboardEvent.keyCode
        handled = true;
    }

    if (handled) {
        console.log('handled', handled)
        // Suppress "double action" if event handled
        event.preventDefault();
    }
}, true);

document.getElementById('add').addEventListener('click', () => {
    let createdVehicle = new Text();
    
    // this essentially stamps out a new container from the input text
    let table = document.getElementById('list');
    console.log('This is new container from input', table);

    let row = table.insertRow(1);
    console.log('This is adding another row of data from text input', row);

    row.setAttribute('id', `item-${id}`);
        // console.log('line 11', row.setAttribute('id', `item-${id}`))
    row.insertCell(0).innerHTML = document.getElementById('new-vehicle-make').value;
    // console.log('line 12', row.insertCell(0).innerHTML = document.getElementById('new-vehicle-make').value)
    row.insertCell(1).innerHTML = document.getElementById('new-vehicle-model').value;
    row.insertCell(2).innerHTML = document.getElementById('new-vehicle-year').value;
    let actions = row.insertCell(3);
    console.log(actions);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-vehicle-make').value = '';
    document.getElementById('new-vehicle-model').value = '';
    document.getElementById('new-vehicle-year').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Remove';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

// function onSomethingTyped() {
//     if (event.keyCode === 13) { // enter key
        
//     }
// }