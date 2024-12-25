import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Utilisé côté client
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Importation des routes

@NgModule({
  declarations: [AppComponent],  // Déclaration du composant principal
  imports: [BrowserModule, AppRoutingModule],  // Importation du module de routage et du module browser
  providers: [],
  bootstrap: [AppComponent]  // Composant à afficher en premier
})
export class AppModule {}
