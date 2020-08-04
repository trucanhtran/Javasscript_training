function Person(first, last, age, eye) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyecolor = eye;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + ". My mother is " + myMother.age;
