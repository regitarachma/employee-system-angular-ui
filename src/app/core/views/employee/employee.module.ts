import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeFormComponent } from './form/employee-form.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeTableComponent } from './table/employee-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TextMaskModule } from 'angular2-text-mask';
import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    EmployeeFormComponent,
    EmployeeTableComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgSelectModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    TextMaskModule,
    BsDatepickerModule
  ]
})
export class EmployeeModule {}
