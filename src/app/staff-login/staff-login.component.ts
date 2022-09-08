import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToAdmin()
  {
    this.router.navigate(['/admindash'])
  }

}
