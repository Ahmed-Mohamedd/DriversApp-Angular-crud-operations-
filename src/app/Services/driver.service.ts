import { IDriver } from 'src/app/Models/driver';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http : HttpClient) { }

  public getDrivers(): Observable<IDriver[]>{
    return this.http.get<IDriver[]>('https://localhost:7012/api/Drivers');
  }
  public getDriverById(id:string): Observable<IDriver>{
    return this.http.get<IDriver>(`https://localhost:7012/api/Drivers/${id}`);
  }

  public PostDriver(driver:IDriver): Observable<any>{
    return this.http.post<IDriver>('https://localhost:7012/api/Drivers' , driver);
  }

  public PutDriver(driver:IDriver): Observable<any>{
    return this.http.put<IDriver>(`https://localhost:7012/api/Drivers?id=${driver.id}` , driver);
  }

  public DeleteDriver(id:string):Observable<any>{
    return this.http.delete(`https://localhost:7012/api/Drivers/${id}`)
  }
}
