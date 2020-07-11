import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';
@Component({
    selector: 'app-edit-car',
    templateUrl: './edit-car.component.html',
    styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

    /**
     * Represents the current car
     */
    public currentCar: Car;

    constructor(
        private carService: CarService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        // get the ID of the car in the params /cars/:id
        const id = this.route.snapshot.paramMap.get('id');
        if (id != null) {
            this.getCar(id);
        }
    }

    /**
     * Call the service to get a car by ID
     * @param id car id
     */
    public getCar(id: string): void {
        this.carService.getCarByID(id)
            .subscribe(
                res => {
                    this.currentCar = res;
                },
                err => {
                    alert('An error occured!\n' + err.error.message);
                    this.router.navigate(['/cars']);
                }
            );
    }


    /**
     * Call the service to update the car
     */
    public updateCar(): void {
        this.carService.updateCar(this.currentCar)
            .subscribe(
                res => {
                    alert('Car Updated!');
                    this.router.navigate(['/cars']);
                },
                err => {
                    alert('An error occured!\n' + err.error.message);
                }
            );
    }


}
