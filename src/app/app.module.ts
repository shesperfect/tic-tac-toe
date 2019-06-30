import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';
import { CellComponent } from './cell/cell.component';
import { SettingsComponent } from './settings/settings.component';
import { NumArrayPipe } from './num-array.pipe';
import { HomeComponent } from './home/home.component';
import { PlayerSelectComponent } from './player-select/player-select.component';
import { TicTacModel } from './model.';
import { GuardService } from './guard.service';

@NgModule({
  declarations: [
    AppComponent,
    BattlefieldComponent,
    CellComponent,
    SettingsComponent,
    NumArrayPipe,
    HomeComponent,
    PlayerSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TicTacModel, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
