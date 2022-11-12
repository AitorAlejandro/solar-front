import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { CarChargerRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, CarChargerRoutingModule],
})
export class ContactModule {}
