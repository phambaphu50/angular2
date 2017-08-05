import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable() // decorator: add metadata into class (see employee.service.js)
export class EmployeeService {
	private apiUrl = "http://59859badd0272300111c5f62.mockapi.io/employee";

	constructor(private _http: Http){ }

	GetList(): Observable<any[]> {
		/*let employees: any[] = [
			{ id: 1, name: "Nguyen Van A" },
			{ id: 2, name: "Le Van B" },
			{ id: 3, name: "Nguyen Van C" },
			{ id: 4, name: "Nguyen Van D" },
			{ id: 5, name: "Nguyen Van E" },
		];
		return employees;*/
		return this._http.get(this.apiUrl).map((response: Response) => response.json()); 
	}
}
