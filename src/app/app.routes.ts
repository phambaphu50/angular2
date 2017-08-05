import { Route, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {EmployeeListComponent} from './employee.component';

const routing = [
	{path: '', component: HomeComponent},
	{path: 'employees', component: EmployeeListComponent}
];

export const appRoutes = RouterModule.forRoot(routing);