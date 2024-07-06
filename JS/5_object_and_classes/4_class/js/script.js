"use strict";
    class Car
    {
        constructor(make, model, year)
        {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        display()
        {
            document.write(this.make + this.model + this.year);
        };
    };
    let car1 = new Car("Hyundai","i20" ,2014);
    let car2 = new Car("Hona","City",2005);
    let car3 = new Car("Tata","Nano",2012);

    for (let prop in car1)
    {
        document.write(prop + ":" + car1[prop] + "<br>")
    }