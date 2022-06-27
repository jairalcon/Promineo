//! FROM 6/27/22
// League is a Class 
// WNBA, NBA, NFL, NHL, MLB, would be objects of this class

// Sport Type, Name of the League, Country, Gender

//class definition
class League {
    constructor(leagueName){
      this.leagueName = leagueName;
      this.teams = [];
    }
    addTeam(teamObject){
      this.teams.push(teamObject)
    }
    displayTeams(){
      console.log(this.teams)
    }
  }
  //create a new object of the League class
  let NHL = new League("NHL");
  
  // Team is another Class
  class Team{
    constructor(teamName,coachName){
      this.teamName = teamName;
      this.playerRoster = [];
      this.coach = coachName
      this.city = ""
      this.wins = 0;
      this.logo = ""
    }
    assignNewCoach(coachName){
      this.coach = coachName;
    }
  }
  
  // Phoenix Suns, San Jose Sharks, Nashville Predators would be objects of the Team class
  let team1 = new Team("New York Rangers", "John Smith"); 
  let team2 = new Team("San Jose Sharks", );
  let team3 = new Team("Nashville Predators");
  
  NHL.addTeam(team1)
  NHL.addTeam(team2)
  NHL.addTeam(team3)
  NHL.displayTeams()
  
  
  // Players
  
  // Human is a class
  // Devon, Kat, Matthew, Brendan, Nick, Sally, are objects of the human class
  
  
  // Movie Class
  // Title, Release Date, Genre, LeadingRole, Director, Length
  
  //class definition
  //The constructor method is a special method of a class for creating and initializing an object instance of that class.
  
  class Movie{
    constructor(title){
      this.title = title
    }
    addDirector(directorName){
      this.director = directorName;
    }
    addRelease(date){
      this.releaseDate = date;
    }
    displayMovie(){
      //this output is using template literals
      console.log(`${this.title} was directed by ${this.director}`)
    }
  
  }
  
  //create an Object based off the Movie Class
  let movie1 = new Movie("Thor");
  movie1.addRelease(2011)
  //console.log(movie1)
  
  movie1.addDirector("Kenneth Branagh")
  movie1.displayMovie();
  
  let movie2 = new Movie("Thor Ragnarok");
  //console.log(movie2)
  
  let myMovieCatalog = [];
  myMovieCatalog.push(movie1, movie2)
  //console.log(myMovieCatalog)