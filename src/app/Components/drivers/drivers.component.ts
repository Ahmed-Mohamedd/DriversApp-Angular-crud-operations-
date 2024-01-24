import { Route, Router } from '@angular/router';
import { IDriver } from './../../Models/driver';

import { DriverService } from './../../Services/driver.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})


export class DriversComponent {

  Drivers:IDriver[] = [];
constructor(private driverService:DriverService , private _router:Router){}

ngOnInit(){
this.driverService.getDrivers().subscribe((result => {this.Drivers = result}));
}

deleteDriver(id:string){
this.driverService.DeleteDriver(id).subscribe(
  (res => {
    console.log(res);
    this._router.navigate(['/drivers']);
  })
)
}

}
