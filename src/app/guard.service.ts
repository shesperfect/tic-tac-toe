import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { TicTacModel } from './model.';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private model: TicTacModel, private router: Router) {}

  canActivate(): boolean {
    if (!this.model.players.length) {
      this.router.navigateByUrl('/');
    }
    return true;
  }
}
