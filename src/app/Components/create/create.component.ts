import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDriver } from 'src/app/Models/driver';
import { DriverService } from 'src/app/Services/driver.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

constructor(private driverService:DriverService , private router:Router){}

DriverInfo:IDriver = { id:'', driverName:'' , number:0, team:''};
error:string ='';


registerForm:any = new FormGroup({
  driverName: new FormControl(null , [Validators.required,Validators.minLength(2)]),
  number: new FormControl(null , [Validators.required]),
  team: new FormControl(null , [Validators.required,Validators.minLength(2)]),
})

registerDetails(driver:any)
{
  this.DriverInfo = driver.value;
  this.driverService.PostDriver(this.DriverInfo).subscribe(
    (Response) =>{
      console.log(Response)
      if(Response.id!=='')
      {
        this.router.navigate(['/drivers'])
      }
      else{
        this.error = Response.errors;
          console.log(this.error);
      }
    }
  )
}

}
