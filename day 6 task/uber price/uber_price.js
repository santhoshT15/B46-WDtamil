class uberFare {
    constructor (city, fare, customerName) {
        this.city = city;
        this.fare = fare;
        this.customerName  = customerName;
 
    }
        getFareCity(){
            return "fare for the City is " +  this.fare;
        }
 
}
 
let cityA = new uberFare( "cityA", 600, "customer1");
let cityB = new uberFare( "cityB", 300, "customer2");
 
console.log(cityA.getFareCity()); // 600
console.log(cityB.getFareCity()); // 300