class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}
mycar = new Car("Ford");
document.getElementById("demo").innerHTML = mycar.present();
