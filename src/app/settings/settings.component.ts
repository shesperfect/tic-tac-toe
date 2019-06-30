import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TicTacModel } from '../model.';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.pug',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  form: FormGroup;
  disabled = false;

  constructor(private model: TicTacModel, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      size: new FormControl(2, [Validators.min(2), Validators.max(10)])
    });

    this.form.valueChanges.subscribe(() => this.disabled = !this.form.valid);
  }

  save() {
    this.model.size = this.form.value.size;

    this.router.navigateByUrl('/');
  }
}
