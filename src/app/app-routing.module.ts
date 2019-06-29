import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';
import { HomeComponent } from './home/home.component';
import { PlayerChooseComponent } from './player-choose/player-choose.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'battle', component: BattlefieldComponent },
  { path: 'player-choose', component: PlayerChooseComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
