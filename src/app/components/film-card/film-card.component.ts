import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthData, AuthService } from 'src/app/auth/auth.service';
import { Film } from 'src/app/models/film';
import { Preferiti } from 'src/app/models/preferiti';
import { FilmService } from 'src/app/service/film.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {
  @Input() films!: Film

  @Input() pref!: Preferiti[]
  film!: Film[]
  sub!: Subscription
  utenteId: number | undefined
  utenteLoggato!: AuthData | null
  urlBase = "http://localhost:4201/api"
  favoriti: boolean = false
  mieiPref: Array<Preferiti> = this.pref
  constructor(private filmSrv: FilmService, private authSrv: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.authSrv.user$.subscribe((user) => {
      this.utenteLoggato = user

    })
    //console.log(this.films.id)
    /*const u = this.filmSrv.caricaPreferiti(this.utenteId).pipe(take(1)).subscribe(u =>{
      this.fav = u
    })*/
    
  }
  async addPreferito(userId: number, movieId: number) {
    await this.filmSrv.aggiungiPreferito(userId, movieId).subscribe()
    this.favoriti = true
  }
  async rimuoviFavorito(id: number) {
    await this.filmSrv.rimuoviFavorito(id);
    this.favoriti = false
  }
}
