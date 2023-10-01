import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SharedUiModule } from '@mezcal-mystique/shared-ui';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, HomepageRoutingModule, SharedUiModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
