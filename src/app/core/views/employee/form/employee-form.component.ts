import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

export const GROUPS = [
  { id: 1, name: 'Zensus' },
  { id: 2, name: 'Nellies' },
  { id: 3, name: 'Lebanon' },
  { id: 4, name: 'OBM' },
  { id: 5, name: 'Johnson' },
  { id: 6, name: 'Sealoud' },
  { id: 7, name: 'Geekko' },
  { id: 8, name: 'Suretech' },
  { id: 9, name: 'Hopeli' },
  { id: 10, name: 'Velity' }
];

@Component({
  templateUrl: './employee-form.component.html',
})
export class EmployeeFormComponent implements OnInit {

  editable: boolean = false;
  form: FormGroup;
  id: number = 0;
  title: string = '';
  groups: Array<any> = GROUPS;
  replaceValue: any;
  formSubmit: any;
  buttonSubmit: boolean;
  maxDate: Date;
  data: any

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public location: Location,
    public employeeService: EmployeeService
  ) {
    this.form = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]{2,4}(,\s)?)+$/)
      ]),
      birthDate: new FormControl(null, Validators.required),
      basicSalary: new FormControl('', [
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ]),
      status: new FormControl('', Validators.required),
      group: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.title = this.activatedRoute.snapshot.data.title;
    this.editable = this.activatedRoute.snapshot.data.editable;
    this.maxDate = new Date();

    if (!this.editable) {
      this.form.disable();
    }

    if (this.id) {
      this.form.patchValue(this.employeeService.data);
      this.formatNumber(this.employeeService.data.basicSalary);
    }
  }

  formatNumber(n) {
    const format = n.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);

    if (convert === null) {
      this.replaceValue = '';
    } else {
      this.replaceValue = 'Rp ' + convert.join('.').split('').reverse().join('') + ',00';
    }
  }

  isFieldInvalid(form: FormGroup, field: string | Array<string>): boolean {
    const fieldControl = form.get(field);
    return fieldControl.invalid && (fieldControl.dirty || fieldControl.touched);
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }

    let birthDate = this.form.get('birthDate').value;
  
    if (birthDate !== null) {
      birthDate.setHours(23, 59, 59);
    }

    let birthDateReplace: string = birthDate ? birthDate.toISOString().substring(0, 10) : '';
    this.form.get('birthDate').setValue(birthDateReplace);

    this.formSubmit = Object.assign({}, this.form.value);
  }

  btn(event) {
    this.buttonSubmit = event.isTrusted;
  }
}
