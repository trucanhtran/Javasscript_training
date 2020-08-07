class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}
class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.Model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.Model;
  }
}
mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();
