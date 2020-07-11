import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';

@Component({
    selector: 'app-list-car',
    templateUrl: './list-car.component.html',
    styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

    public listCars: Array<Car> = new Array<Car>();

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.getCars();
    }

    /**
     * Call the service to get all the cars
     */
    public getCars(): void {
        this.carService.getAllCars()
            .subscribe(
                res => {
                    this.listCars = res;
                    if (this.listCars == null || this.listCars.length === 0) {
                        alert('No Cars to show!');
                    }
                },
                err => {
                    alert('Error during fething cars!\n' + err.message);
                });
    }

    /**
     * Call the service to remove the Car
     * @param car the car to be removed
     */
    public removeCar(car: Car): void {
        this.carService.removeCar(car)
            .subscribe(
                res => {
                    alert('Car Removed!');
                    this.getCars();
                },
                err => {
                    alert('An error occured!\n' + err.error.message);
                }
            );
    }
}

