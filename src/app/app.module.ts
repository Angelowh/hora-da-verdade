import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './core/components/contador/contador.component';
import { HoraDaVerdadeComponent } from './core/components/hora-da-verdade/hora-da-verdade.component';
import { RodapeComponent } from './core/components/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HoraDaVerdadeComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
