import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading=false
  constructor(private authSrv:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  async onsubmit(form:NgForm){
    this.isLoading=true
    console.log(form.value)
    try {
      await this.authSrv.registration(form.value).toPromise()
      this.router.navigate(['/login'])
      this.isLoading=false
    } catch (error) {
      console.error(error)
      alert('Attenzione! Utente già registrato');
      form.reset();
      this.isLoading=false

    }
  }

}
