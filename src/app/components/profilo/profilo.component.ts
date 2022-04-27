import { Component, OnInit } from '@angular/core';
import { AuthData, AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {
utenteLoggato: any
  constructor( private authSrv: AuthService) { }

  ngOnInit(): void {
    this.authSrv.user$.subscribe((user)=>{
      this.utenteLoggato = user
      console.log(this.utenteLoggato?.user.name)
    })
  }

}
