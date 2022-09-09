// in its own file so it can be reusable
const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';
// reads top to bottom
// creating class, normal class, has little to do with React
// has functions and calls
class HousesApi {
    get = async() => {
        try{
            // data from response into JSON
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) { //catching errors
            console.log('Oops, looks like fetchHouses had an issue.', e);
        }
    }
    // creating another method that takes in argument
    put = async (house) => {
        try{
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json' //type and value
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch (e) {
            console.log('Oops, looks like updating houses had an issue.', e);
        }
    }
}

export const housesApi = new HousesApi();

// we're using the same instances of these methods instead of creating new ones