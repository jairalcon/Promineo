var list1 = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
];

function getFirstPython(list) {
  // Thank you for checking out my kata :)
  list.find((e) => {
    //     console.log(e)
    if (e.language === "Python") {
      return `${e.firstName}, ${e.country}`;
    }
  });
  //   console.log("There will be no Python developers")
  //   return `There will be no Python developers`
}

// for (let i = 0; i < list1.length; i++) {
//   //     console.log(i);
//   //     console.log(list1[i]);
//   if (list1[i].language === "Python") {
//     //       console.log(`${list1[i].firstName}, ${list1[i].country}`);
//     return `${list1[i].firstName}, ${list1[i].country}`;
//   }
// }

//fromChris
// const found = array1.find(element => element > 10);

console.log(getFirstPython(list1));

var list2 = [
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 29,
    language: "JavaScript",
  },
  {
    firstName: "Amar",
    lastName: "V.",
    country: "Bosnia and Herzegovina",
    continent: "Europe",
    age: 32,
    language: "Ruby",
  },
];
