import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCarComponent } from './car/list-car/list-car.component';
import { AddCarComponent } from './car/add-car/add-car.component';
import { EditCarComponent } from './car/edit-car/edit-car.component';


const routes: Routes = [
    { path: '', component: ListCarComponent },
    { path: 'add', component: AddCarComponent },
    { path: 'cars', component: ListCarComponent },
    { path: 'cars/:id', component: EditCarComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
