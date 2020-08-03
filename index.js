var person = {
  firstName: "John",
  lastname: "Doe",
  language: "en",
  fullname: function () {
    return this.firstName + " " + this.lastname;
  },
  get fullname1() {
    return this.firstName + " " + this.lastname;
  },
  get lang() {
    return this.language.toUpperCase();
  },
};
document.getElementById("demo").innerHTML =
  person.fullname() + " " + person.fullname1 + " " + person.lang;
