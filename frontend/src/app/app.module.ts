import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCarComponent } from './car/add-car/add-car.component';
import { EditCarComponent } from './car/edit-car/edit-car.component';
import { ListCarComponent } from './car/list-car/list-car.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    EditCarComponent,
    ListCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
