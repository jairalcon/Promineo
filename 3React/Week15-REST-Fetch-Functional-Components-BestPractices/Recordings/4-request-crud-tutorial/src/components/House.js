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
    
    const rooms = () => (
        <ul>
           {house.rooms.map((room, index) => (
            <li key={index}>
                <label> {`${room.name} Area: ${room.area}`}</label>
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
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};