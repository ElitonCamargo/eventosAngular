import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEventoComponent } from './components/card-evento/card-evento.component';



@NgModule({
  declarations: [
    CardEventoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CardEventoComponent]
})
export class SharedModule { }
