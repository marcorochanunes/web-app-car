import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

    // Represent the car to be created
    public newCar: Car = new Car();

    constructor(private carService: CarService) { }

    ngOnInit() { }

    /**
     * Calls the service to save the car
     */
    public saveCar(): void {
        console.log(this.newCar);
        this.carService.createCar(this.newCar)
            .subscribe(
                res => {
                    alert('Car Saved!');
                    this.newCar = new Car();
                },
                err => {
                    alert('An error occured!\n' + err.error.message);
                }
            );
    }
}
