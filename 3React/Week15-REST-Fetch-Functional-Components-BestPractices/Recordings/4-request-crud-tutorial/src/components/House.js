import React from "react";
import { NewRoomForm } from './NewRoomForm'

export const House = (props) => {
    const { house, updateHouse } = props;
    
    const deleteRoom = (roomId) => {
        // assigning new variable to object
        const updatedHouse = {
            // spread house component, keeping values from the house
            ...house,
            // update to different value, same array, filter out id of room we're deleting
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        // take house and send to PUT to update on API
        updateHouse(updatedHouse);
    }
    // spreading house, rooms - then taking array of rooms and adding new room
    const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});



    //function to check if the room name is null or empty
    const checkRoomName = (room) => {
        //console.log("Shows a room object:", room); //Shows a room object in the console

        //If the room name is null or empty return an empty string
        if (room === null || room === "") {
            return "";
        }
        //If the room name is not null or empty return the room name
        else {
            return room.name;
        }
    };

    //function to check if the room area is null or empty
    const checkRoomArea = (room) => {
        //If the room area is null or empty return an empty string
        if (room === null || room === "") {
            return "";
        }
        //If the room area is not null or empty return the room area
        else {
            return room.area;
        }
    };
    
    const rooms = () => (
        <ul>
           {house.rooms.map((room, index) => (
            <li key={index}>
                <label> {`${checkRoomName(room)} Area: ${checkRoomArea(room)}`}</label>
                <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
            </li>
           ))}
        </ul>
    );

    return (
        <div>
            <h1>{house.name}</h1>
            {
                // props that we're passing in
                rooms({ rooms, houseId: house._id, deleteRoom })
            }
            {/* {console.log(rooms)} */}
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};