// creating HOUSE class
class House {
    constructor(name) {
        // each house will have a name
        this.name = name;
        // each house will have an array of rooms
        this.rooms = [];
    }

    // method to add room
    addRoom(name, area) {
        this.rooms.push(new Room(name, area));
    }
}

class Room {
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
}

//* using all the static methods makes them reusable within the JS code
// creating actual service, sending http requests
class HouseService {
    // this is pointing to the API we're using
    static url = 'https://ancient-taiga-31359.herokuapp.com/api/houses';
    // creating methods
    // returns all the houses via the url
    static getAllHouses() {
        // returns all houses from server
        return $.get(this.url);
    }
    // get a specific house
    static getHouse(id) {
        // return specific house via its ID, GET = READ
        return $.get(this.url + `/${id}`);
    }
    // creating house
    // will take an instance of House class with name and array
    static createHouse(house) {
        // posts new house name and space for rooms, = CREATE
        return $.post(this.url, house);
    }

    // 
    static updateHouse(house) {
        return $.ajax({
            // multiple fields, _id is created automatically by database
            url: this.url + `/${house._id}`,
            dataType: 'json',
            data: JSON.stringify(house),
            contentType: 'application/json',
            // PUT = UPDATE
            type: 'PUT'
        });
    }

    static deleteHouse(id) {
        // whichever id matches the id will be deleted
        return $.ajax({
            url: this.url + `/${id}`,
            // DELETE = DELETE
            type: 'DELETE'
        });
    }
}

// creating DOM manager class, re-render data, class
class DOMManager {
    static houses;
    // calls getAllHouses method and renders to DOM
    static getAllHouses() {
        // calling this will re-render the DOM
        HouseService.getAllHouses().then(houses => this.render(houses));
    }
    // 
    static createHouse(name) {
        HouseService.createHouse(new House(name))
            .then(() => {
                return HouseService.getAllHouses();
            })
            .then((houses) => this.render(houses));
    }

    // once we delete house, we want to get a render all houses again
    static deleteHouse(id) {
        HouseService.deleteHouse(id)
            .then(() => {
                return HouseService.getAllHouses();
            })
            .then((houses) => this.render(houses));
    }
    
    // adding rooms to house
    static addRoom(id) {
        // looking at each house in the house array
        for(let house of this.houses) {
            if (house._id == id) {
                // Jquery($), 
                house.rooms.push(new Room($(`#${house._id}-room-name`).val(), $(`#${house._id}-room-area`).val()));
                // sending to save updated data
                HouseService.updateHouse(house)
                    .then(() => {
                        return HouseService.getAllHouses();
                    })
                    .then((houses) => this.render(houses));
            }
        }
    }

    // deleting room
    static deleteRoom(houseId, roomId) {
        // looping through houses
        for (let house of this.houses) {
            if (house._id == houseId) {
                for (let room of house.rooms) {
                    if (room._id == roomId) {
                        house.rooms.splice(house.rooms.indexOf(room), 1);
                        HouseService.updateHouse(house)
                            .then(() => {
                                return HouseService.getAllHouses();
                            })
                            .then((houses) => this.render(houses));
                    }
                }
            }
        }
    }
    
    // building out render method
    static render(houses) {
        // 
        this.houses = houses;
        // referencing app div by ID, then empty it
        $('#app').empty();
        for (let house of houses) {
            // most recent will show on top of list
            $('#app').prepend(
                `<div id="${house._id}" class="card">
                    <div class="card-header">
                        <h2>${house.name}</h2>
                        <button class="btn btn-danger" onclick="DOMManager.deleteHouse('${house._id}')">Delete</button>
                    </div>
                    <div class="card-body">
                        <div class="card">
                            <div class="row">
                                <div class="col-sm">
                                    <input type="text" id="${house._id}-room-name" class="form-control" placeholder="Room Name">
                                </div>
                                <div class="col-sm">
                                    <input type="text" id="${house._id}-room-area" class="form-control" placeholder="Room Area">
                                </div>
                            </div>
                            <button id="${house._id}-new-room" onclick="DOMManager.addRoom('${house._id}')" class="btn btn-primary form-control">Add</button>
                        </div>
                    </div>
                </div><br>`
            );
            // render each room inside the house
            for (let room of house.rooms) {
                $(`#${house._id}`).find('.card-body').append(
                    `<p>
                        <span id="name-${room._id}"><strong>Name: </strong> ${room.name}</span>
                        <span id="area-${room._id}"><strong>Area: </strong> ${room.area}</span>
                        <button class="btn btn-danger" onclick="DOMManager.deleteRoom('${house._id}', '${room._id}')">Delete Room</button>`
                );
            }
        }
    }

}

$('#create-new-house').click(() => {
    DOMManager.createHouse($('#new-house-name').val());
    $('#new-house-name').val('');
});

DOMManager.getAllHouses();