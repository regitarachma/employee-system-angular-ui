import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeTableComponent } from "./table/employee-table.component";
import { EmployeeFormComponent } from "./form/employee-form.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employee',
    },
    children: [
      {
        path: '',
        component: EmployeeTableComponent,
        data: {
          title: 'Table',
        }
      },
      {
        path: 'add',
        component: EmployeeFormComponent,
        data: {
          title: 'Add',
          editable: true
        }
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: EmployeeFormComponent,
            data: {
              title: 'Detail',
              editable: false
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {
}
