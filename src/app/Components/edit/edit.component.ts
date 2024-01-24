import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDriver } from 'src/app/Models/driver';
import { DriverService } from 'src/app/Services/driver.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  result:IDriver = { id:'', driverName:'' , number:0, team:''};
  driverId: string = '';
  registerForm:FormGroup = new FormGroup({
    driverName: new FormControl(null , [Validators.required,Validators.minLength(2)]),
    number: new FormControl(null , [Validators.required]),
    team: new FormControl(null , [Validators.required,Validators.minLength(2)]),
  })
  constructor(
    private formBuilder:FormBuilder,
    private _driverService:DriverService ,
    private _ActivatedRoute:ActivatedRoute ,
    private _router:Router){}

  ngOnInit(){
    this.driverId = this._ActivatedRoute.snapshot.params['id'];
    this._driverService.getDriverById(this.driverId).subscribe(
      (response)=>{
        this.result = response;
          console.log(this.result);
          console.log(this.driverId);

          this.registerForm.patchValue({
            driverName: response.driverName,
            number: response.number,
            team: response.team,
          });
          console.log(this.registerForm);

      }
    )
  }


  DriverInfo:IDriver = { id:'' , driverName:'' , number:0, team:''};

  submitForm(driver:any){
    this.DriverInfo = driver.value;
    this.DriverInfo.id = this.driverId;
    console.log(this.DriverInfo);
    this._driverService.PutDriver(this.DriverInfo).subscribe(
      (Response) =>{
        console.log(Response)
        if(Response.id!=='')
        {
          this._router.navigate(['/drivers'])
        }
        else{
            console.log(Response);
        }
      }
    )
  }
}
