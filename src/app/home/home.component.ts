import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { DisponibilidadComponent } from "../disponibilidad/disponibilidad.component";
import { ContactComponent } from "../contact/contact.component";
import { ServiceComponent } from "../service/service.component";
import { AnimationTextComponent } from "../animation-text/animation-text.component";
import { PresentationMsComponent } from "../presentation-ms/presentation-ms.component";
import { CardPackComponent } from "../card-pack/card-pack.component";
import { PackDepthComponent } from "../pack-depth/pack-depth.component";
import { PackExternelComponent } from "../pack-externel/pack-externel.component";
import { PackExternelOnlyComponent } from "../pack-externel-only/pack-externel-only.component";
import { PackInternelComponent } from "../pack-internel/pack-internel.component";
import { SloganComponent } from "../slogan/slogan.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, DisponibilidadComponent, ContactComponent, ServiceComponent, AnimationTextComponent, PresentationMsComponent, CardPackComponent, PackDepthComponent, PackExternelComponent, PackExternelOnlyComponent, PackInternelComponent, SloganComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
