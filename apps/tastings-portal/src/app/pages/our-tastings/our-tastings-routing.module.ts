import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurTastingsComponent } from './our-tastings.component';

const routes: Routes = [{ path: '', component: OurTastingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurTastingsRoutingModule {}
