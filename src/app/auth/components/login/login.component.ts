import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false
  constructor(private authSrv:AuthService, private router:Router) {}

  ngOnInit(): void {}

  async accedi(form: NgForm) {
    this.isLoading = true
    console.log(form.value);
    try {
      await this.authSrv.login(form.value).toPromise()
      this.isLoading = false
      alert('Benvenuto')
      this.router.navigate(['/movies-popular'])
    } catch (error) {
      this.isLoading = false
      form.reset();
      alert(error);
      console.error(error)
    }
  }
}
