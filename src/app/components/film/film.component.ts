import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthData, AuthService } from 'src/app/auth/auth.service';
import { Film } from 'src/app/models/film';
import { Preferiti } from 'src/app/models/preferiti';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

films!: Film[]
sub!: Subscription
fav!: Preferiti[]
favoriti: boolean = false
utenteId!: number
utenteLoggato!: AuthData | null

  constructor(private filmSrv: FilmService, private authSrv: AuthService) { }

  ngOnInit(): void {
    this.sub = this.filmSrv.caricaFilm().subscribe((f)=>{
      this.films = f
    })
this.authSrv.user$.subscribe((user)=>{
  this.utenteLoggato = user
})
    this.sub = this.filmSrv.caricaPreferiti(this.utenteId).subscribe(u =>{
      console.log(this.fav)
      this.fav = u
      
    
    })
  }

}
