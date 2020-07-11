import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:3001/cars';

@Injectable({
    providedIn: 'root'
})
export class CarService {

    constructor(private http: HttpClient) { }

    /**
     * Request to get All Cars from API
     */
    public getAllCars(): Observable<Car[]> {
        return this.http.get<Car[]>(baseURL);
    }
    /* public getAllCars(): Promise<Array<Car>> {
        return this.http.get(baseURL).toPromise().then((response: Array<Car>) => {
            return response;
        });
    } */

    /**
     * Request to get a car by ID
     */
    public getCarByID(id: string): Observable<Car> {
        return this.http.get<Car>(`${baseURL}/${id}`);
    }

    /**
     * Request to create a new car
     * @param car the car to be created
     */
    public createCar(car: Car): Observable<Car> {
        return this.http.post<Car>(baseURL, car);
    }

    /**
     * Request to remove a car
     * @param car car to be removed
     */
    public removeCar(car: Car): Observable<Car> {
        return this.http.delete<Car>(`${baseURL}/${car.id}`);
    }

    /**
     * Request to update a car
     * @param car car to be updated
     */
    public updateCar(car: Car) {
        return this.http.put<Car>(`${baseURL}/${car.id}`, car);
    }

}
