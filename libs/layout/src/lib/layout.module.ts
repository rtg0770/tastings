import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { SharedUiModule } from '@mezcal-mystique/shared-ui';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, SharedUiModule, RouterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
