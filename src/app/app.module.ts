import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FilmComponent } from './components/film/film.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmCardComponent,
    ProfiloComponent,
    PreferitiComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
