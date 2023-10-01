import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurTastingsRoutingModule } from './our-tastings-routing.module';
import { OurTastingsComponent } from './our-tastings.component';

@NgModule({
  declarations: [OurTastingsComponent],
  imports: [CommonModule, OurTastingsRoutingModule],
  exports: [OurTastingsComponent],
})
export class OurTastingsModule {}
