// ! Using AJAX with "get" and "post"
// sending http get request, and method will log out data
$.get('https://reqres.in/api/users/2', (data) => console.log('This is stored (get) data:', data));

// sending http post request, and method will log out data
$.post('https://reqres.in/api/users', {
    name: 'Tommy',
    job: 'Front End Software Developer',
}, (data) => console.log('This is new (post) data:', data));