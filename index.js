var person = {
  firstName: "John",
  lastname: "Doe",
  language: "en",
  get lang() {
    return this.language;
  },
};
document.getElementById("demo").innerHTML = person.lang;
