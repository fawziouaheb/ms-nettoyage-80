import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DisponibilidadComponent } from './disponibilidad/disponibilidad.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceComponent } from './service/service.component';
import { AnimationTextComponent } from './animation-text/animation-text.component';
import { PresentationMsComponent } from './presentation-ms/presentation-ms.component';
import { CardPackComponent } from './card-pack/card-pack.component';
import { PackDepthComponent } from './pack-depth/pack-depth.component';
import { PackExternelComponent } from './pack-externel/pack-externel.component';
import { PackExternelOnlyComponent } from './pack-externel-only/pack-externel-only.component';
import { PackInternelComponent } from './pack-internel/pack-internel.component'
@NgModule({
  declarations: [
 

  ],
  imports: [
    BrowserModule,
    FooterComponent,
    DisponibilidadComponent,
    ContactComponent,
    NavbarComponent,
    ServiceComponent,
    AnimationTextComponent,
    PresentationMsComponent,
    CardPackComponent,
    PackDepthComponent,
    PackExternelComponent,
    PackExternelOnlyComponent,
    PackInternelComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
