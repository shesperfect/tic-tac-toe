import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';
import { HomeComponent } from './home/home.component';
import { PlayerSelectComponent } from './player-select/player-select.component';

import { GuardService } from './guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, children:
      [
        { path: 'settings', component: SettingsComponent },
      ]
  },
  { path: 'battle', component: BattlefieldComponent, canActivate: [GuardService] },
  { path: 'select-player', component: PlayerSelectComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
