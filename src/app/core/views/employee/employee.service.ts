import { Injectable } from '@angular/core';
import { CoreModule } from '../../core.module';

@Injectable({ providedIn: CoreModule })
export class EmployeeService {

  dataTemp: any[];
  constructor() { }

   get data(): any{
    return this.dataTemp;
  }

  set data(val: any){
    this.dataTemp = val;
  }
}