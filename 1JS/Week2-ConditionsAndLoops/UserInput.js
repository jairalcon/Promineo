//* Based on the data that is input will determine which code to run
//* we can combine code with user input

//! prompt box to enter name and return message.
// var name = window.prompt('What is your name?')
// window.alert(`Welcome, ${name}`);
// OR window.alert('Welcome, ' + name);

// let username = prompt('Username:')
// let password = prompt('Password:')

//! simple code for logging in
// if (username == 'samy123' && password == '12345') {
//     alert('Welcome back, ' + username);
// } else {
//     alert('Incorrect username or password.');
// }

//!code with loop until input is correct using above code
var loggedIn = false;
//* added var loginAttempts = 0;
var loginAttempts = 0;
//* not logged in with bing operator !
//* added && loginAttempts < 3
while(!loggedIn && loginAttempts < 3) {
    let username = prompt('Username:');
    let password = prompt('Password:');

    //* then evaluate password and username
    if (username == 'samy123' && password == '12345') {
        alert('Welcome back, ' + username);
        //* this will stop the loop once conditions are met
        loggedIn = true;
    } else {
        alert('Incorrect username or password.');
        //* added loginAttempts++ to stop attempts after assigned value;
        loginAttempts++;
    }
}
//* added while loop 
while (!loggedIn && loginAttempts >= 3) {
    alert('Exceeded login attempt. Contact your administrator.');
}

//! In the above code, we use a Boolean variable as a flag 
//! to determine whether the user is logged in or not. 
//! If the user enters the wrong credentials, nothing happens to 
//! the loggedIn variable, so it remains false causing the loop 
//! to iterate again and again until the user enters the correct 
//! credentials, at which point we update the loggedIn variable 
//! to true, which will cause the loop to stop iterating.

//! We could also add a login attempt count that would 
//! enable the user to only enter the incorrect credentials a 
//! certain number of times before displaying a message 
//! like "You are locked out" and ending the loop. See if 
//! you can figure out how to implement this feature.



//* we can combine with construct we're learning 
//* to create useful, logical business rules in our applications