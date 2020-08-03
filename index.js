var person = {
  firstName: "John",
  lastname: "Doe",
  fullname: function () {
    return this.firstName + " " + this.lastname;
  },
  get fullname1() {
    return this.firstName + " " + this.lastname;
  },
};
document.getElementById("demo").innerHTML =
  person.fullname() + person.fullname1();
