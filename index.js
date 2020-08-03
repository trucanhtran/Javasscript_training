var person = {
  firstName: "John",
  lastname: "Doe",
  language: "NO",
  set lang(value) {
    this.language = value;
  },
};
person.lang = "en";
document.getElementById("demo").innerHTML = person.language;
