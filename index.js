function Person(first, last, age, eye) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyecolor = eye;
}
Person.prototype.name = function () {
  return this.firstname + " " + this.lastname;
};
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
document.getElementById("demo").innerHTML =
  "My father is " +
  myFather.name() +
  "<br/>" +
  "He is " +
  myFather.age +
  ". My mother is " +
  myMother.age;
