import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthData, AuthService } from '../auth/auth.service';
import { Film } from '../models/film';
import { Preferiti } from '../models/preferiti';


@Injectable({
  providedIn: 'root'
})
export class FilmService {
urlBase = "http://localhost:4201/api"

  constructor(private http:HttpClient, private authSrv: AuthService) { }
 caricaFilm(){
   return this.http.get<Film[]>(`${this.urlBase}/movie/popular`)
 }
 caricaPreferiti(id:number){
  return this.http.get<Preferiti[]>(`${this.urlBase}/favorites?userId=${id}`)
 }
  aggiungiPreferito(movieId:number,userId:number){
    const preferito: Preferiti = {movieId,userId}
    return this.http.post<Preferiti>(`${this.urlBase}/favorites`,preferito)
  }
  rimuoviFavorito(id:number){
    return this.http.delete<Preferiti>(`${this.urlBase}/favorites/${id}`)
  }
}
