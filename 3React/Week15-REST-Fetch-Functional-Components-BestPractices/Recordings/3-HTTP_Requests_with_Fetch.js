const ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

fetch(ENDPOINT)
  .then(res => res.json())
  .then(res => {
    // res.forEach(house => document.write(house.name + '<br>'));
    //* lists each instance of house
    // res.forEach(house => console.log(house));
    //* logs the array of houses
    // console.log(res);
    // * logs just the id of the first room in the array
    // console.log(res[0]._id);
    // * logs house element 3, room element 0, name = "front room"
    // console.log(res[3].rooms[0].name);
    // * 

  });

/* fetch(ENDPOINT, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Fetch House JA'
  })
}); */

/* fetch(`${ENDPOINT}/63178e180915a00017d8fa66`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Fetch House JA',
    rooms: [
      {name: 'Front Room', area: 200},
      {name: 'kitchen', area: 220}
    ]
  })
}); */