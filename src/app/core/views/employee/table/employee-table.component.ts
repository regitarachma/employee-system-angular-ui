import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { EmployeeService } from '../employee.service';

export const LIMITS = [
  { key: 10, value: 10 },
  { key: 25, value: 25 },
  { key: 50, value: 50 },
  { key: 100, value: 100 }
];

@Component({
  templateUrl: './employee-table.component.html'
})
export class EmployeeTableComponent implements OnInit {

  ColumnMode = ColumnMode;
  expanded: boolean = false;
  
  rows: any[] = [];
  timeout: any;
  @ViewChild('myTable', {static: false}) table: any;
  temp: any;
  limitValue: Array<any> = LIMITS;
  selectedDefaultValue: number;
  sizePage: number;
  public usernameTemp: any;
  public firstNameTemp: any;
  public lastNameTemp: any;
  public emailTemp: any;
  public birthDateTemp: any;
  public basicSalaryTemp: any;
  public statusTemp: any;
  public groupTemp: any;
  public descriptionTemp: any;
  dataTemp: any;
  query: any;
  dataParam: any;

  constructor(public employeeService: EmployeeService) {
    this.fetch(data => {
      // cache our list
      this.temp = [...data];
      this.rows = data;
    });
  }

  ngOnInit() {
    this.sizePage = 10;
    this.temp = this.rows;
    this.selectedDefaultValue = this.limitValue[0].value;
  }

  getIdData(username, firstName, lastName, email, birthDate, basicSalary, status, group, description) {
    this.usernameTemp = username;
    this.firstNameTemp = firstName;
    this.lastNameTemp = lastName;
    this.emailTemp = email;
    this.birthDateTemp = birthDate;
    this.basicSalaryTemp = basicSalary;
    this.statusTemp = status;
    this.groupTemp = group;
    this.descriptionTemp = description;

    this.dataTemp = {
      "username": this.usernameTemp,
      "firstName": this.firstNameTemp,
      "lastName": this.lastNameTemp,
      "email": this.emailTemp,
      "birthDate": this.birthDateTemp,
      "basicSalary": this.basicSalaryTemp,
      "status": this.statusTemp,
      "group": this.groupTemp,
      "description": this.descriptionTemp
    }

    this.employeeService.data = this.dataTemp;
  }

  onSelectedPageSize(selectedPage: any) {
    let page = selectedPage.value === 'all' ? this.sizePage : selectedPage.value;
    this.sizePage = page;
    this.rows;
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {}, 100);
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/data-employee.json`);
    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(data) {
      return (data.username.toLowerCase().indexOf(val) !== -1 || !val) || 
        (data.firstName.toLowerCase().indexOf(val) !== -1 || !val) || 
        (data.lastName.toLowerCase().indexOf(val) !== -1 || !val) || 
        (data.status.toLowerCase().indexOf(val) !== -1 || !val) || 
        (data.group.toLowerCase().indexOf(val) !== -1 || !val);
    });

    // update the rows
    this.rows = temp;
    this.table.offset = 0;
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
}
