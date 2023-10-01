import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '@mezcal-mystique/material';
@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent, MaterialModule],
})
export class SharedUiModule {}
