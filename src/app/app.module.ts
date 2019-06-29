import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';
import { CellComponent } from './cell/cell.component';
import { SettingsComponent } from './settings/settings.component';
import { NumArrayPipe } from './num-array.pipe';
import { HomeComponent } from './home/home.component';
import { PlayerChooseComponent } from './player-choose/player-choose.component';

@NgModule({
  declarations: [
    AppComponent,
    BattlefieldComponent,
    CellComponent,
    SettingsComponent,
    NumArrayPipe,
    HomeComponent,
    PlayerChooseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
