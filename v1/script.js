const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//console.log(CATEGORIES.find((cat) => cat.name === "society").color);

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Create DOM elements: Render facts in list
factsList.innerHTML = "";

//load data from supabase:
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://cnxweqltstdlskuwvniv.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueHdlcWx0c3RkbHNrdXd2bml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwMDg5OTgsImV4cCI6MjAyMDU4NDk5OH0.aDvzf3nAwgtDWel99avohZhT1n9hhOD05jmAr0wUB08",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueHdlcWx0c3RkbHNrdXd2bml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwMDg5OTgsImV4cCI6MjAyMDU4NDk5OH0.aDvzf3nAwgtDWel99avohZhT1n9hhOD05jmAr0wUB08",
      },
    }
  );
  const data = await res.json();
  //console.log(data);
  //const filteredData = data.filter((fact) => fact.category === "technology");
  //createFactsList(filteredData);
  createFactsList(data);
}

//createFactsList(initialFacts);
function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
      ${fact.text}
       <a
         class="source"
         href="${fact.source}"
         target="_blank"
       >(Source)</a>
    </p>
     <span class="tag" style="background-color: ${
       CATEGORIES.find((cat) => cat.name === fact.category).color
     }">${fact.category}</span> 
   </li>`
  );
  //console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

/*
let votesInteresting = 23;
let votesMindblowing = 5;
const text = "Lisbon is the capital of Portugal";

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
const isEqual = votesFalse === 4;
console.log(isCorrect);
console.log(isEqual);
*/
/*
//built-in function example
console.log(parseInt("24.33xcc"));

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age;
  else
    return `Impossible year. Year needs to be less than or equal to ${currentYear}`;
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(2037));

//Arrow functions:
// const calcFactAge2= (year)=> 2022-year;
const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less than or equal to ${new Date().getFullYear()}`;
console.log(calcFactAge2(2000));
console.log(calcFactAge2(2037));
*/
/*
let votesInteresting = 20;
let votesMindblowing = 5;

if (votesInteresting === votesMindblowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting fact!");
} else if (votesInteresting < votesMindblowing) {
  console.log("Mindblowing fact!");
}

//falsy values: 0, '', null, undefined
//truthy value: everything else...
if (votesMindblowing) {
  console.log("Mindblowing fact!");
} else {
  console.log("Not so special");
}

//ternary operator
let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Fact might be false, check more";

//alert(message);

//strings:
const text = "Lisbon is the capital of Portugal";
const upperText = text.toUpperCase();
console.log(upperText);
//template literal
const str = `The current fact is "${text}". It is ${calcFactAge(
  2015
)} years old. It is probably ${
  totalUpvotes > votesFalse ? "correct" : "not true"
}`;
console.log(str);
*/

/*
//arrays:
const fact = ["Lisbon is the capital of Portugal", 2015, true];
console.log(fact);
console.log(fact[3]);
console.log(fact.length);
//destructuring:
const [text, createdIn, isCorrect] = fact;
console.log(text);
//adding new elements to an array by creating an other array.
//But this does'nt work as expected
const newFact = [fact, "society"];
console.log(newFact);

//spreading:
//... dots is called spread factor
const newFact2 = [...fact, "society"];
console.log(newFact2);

//looping an array:
// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });
//map method:
// const times10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
// console.log(times10);
//map function using array function:
const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10);

//This is an array of objects:
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Just extracting the category names from above objects array
const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

//Extracting ages from this array of objects:
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age;
  else
    return `Impossible year. Year needs to be less than or equal to ${currentYear}`;
}

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);
console.log(factAges.join("-"));
*/
/*
//objects: It is a data structure which stores key value pairs.
//Main difference b/w arrays and objects is that objects can contain methods as well.
const factObj = {
  text: "Lisbon is the capital of Portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact ${
      this.text
    } is from the category ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrect } = factObj;
console.log(category);
console.log(factObj.createSummary());
*/
/*
//filter function in arrays:
console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
*/
//find method returns first value of the array which satisfies the condition
//console.log([7, 64, 6, -23, 11].find((el) => el > 10));
