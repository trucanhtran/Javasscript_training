function Person(first, last, age, eye) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyecolor = eye;
}
Person.prototype.nationality = "English";
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
document.getElementById("demo").innerHTML =
  "My father is " +
  myFather.age +
  ". My mother is " +
  myMother.age +
  "<br/>" +
  "My father is " +
  myFather.nationality +
  ". My mother is " +
  myMother.nationality;
