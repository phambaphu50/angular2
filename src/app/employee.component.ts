import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service'; 

@Component({
  selector: 'employee-list',
  templateUrl: './employee.component.html'
})
export class EmployeeListComponent implements OnInit{	
  public employees : any[];
  constructor(private employeeservice: EmployeeService) { }

  ngOnInit() {
  	// get object Obervable by subscribe
  	this.employeeservice.GetList().subscribe((response: any)=> {
  		this.employees = response;	
  	}, error => {
  		console.log("system error API");
  	}); 
  }
}
