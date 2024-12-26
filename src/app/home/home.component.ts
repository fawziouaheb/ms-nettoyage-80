import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { DisponibilidadComponent } from "../disponibilidad/disponibilidad.component";
import { ContactComponent } from "../contact/contact.component";
import { ServiceComponent } from "../service/service.component";
import { AnimationTextComponent } from "../animation-text/animation-text.component";
import { PresentationMsComponent } from "../presentation-ms/presentation-ms.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, DisponibilidadComponent, ContactComponent, ServiceComponent, AnimationTextComponent, PresentationMsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
