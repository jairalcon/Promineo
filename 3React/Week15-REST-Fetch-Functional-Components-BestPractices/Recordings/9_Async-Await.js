const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

/* ready line by line
use await keyword on async call*/
/* can only use await keywork inside of async function */
const getHouses = async () => {
    const resp = await fetch(HOUSES_ENDPOINT);
    const json = await resp.json();
    console.log(json);
}

getHouses();