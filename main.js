// writing the same program but with javascript
const p = document.querySelector("p");
// p.textContent += " world";
p.innerText = "hello1";

class Info {
  constructor(name, age) {
    this.name = "x";
    this.age = 0;
    /* test code  to test default values
    //console.log(`the default name is ${this.name} and age is ${this.age}`); */
  }
}

function populate() {
  const people = [];
  let index = prompt(`how many poeple do you want to register::`);
  for (let i = 0; i < index; i++) {
    alert(`${index} perosn or people will be registered `);
    const person = new Info();
    person.name = prompt("what is your name ::");
    person.age = prompt("what is your age ::");
    people.push(person); //poeple.unshift(person) work

    //  test again
    // console.log(`${person.name} and ${person.age}`);
  }
  // testing
  //console.log(people);
  return people;
}

function display(people) {
  for (let person = 0; person < people.length; person++) {
    // At the end to show what we stored
    /* people[] then values worked for me but didn't find quick fix before, it is because in debuging fond that
    console.log(people)
    showed it stores the index values thus the fix below
    */
    p.innerText = `The person's name is ${people[person].name} the age is ${people[person].age}`;
  }
}

p1 = populate();
display(p1);
