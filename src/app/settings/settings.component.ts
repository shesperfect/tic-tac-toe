import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TicTacModel } from '../model';

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
      size: new FormControl(model.size, [Validators.min(3), Validators.max(100)]),
      winSize: new FormControl(model.winSize, [
        Validators.min(3), Validators.max(100), this.winSizeValidator.bind(this)])
    });

    this.form.valueChanges.subscribe(() => this.disabled = !this.form.valid);
    this.form.get('size').valueChanges.subscribe(() => this.form.get('winSize').updateValueAndValidity());
  }

  winSizeValidator(control: FormControl) {
    if (this.form) {
      return control.value <= this.form.get('size').value ? null : {
        winSize: {
          valid: false
        }
      };
    }
    return null;
  }

  save() {
    this.model.size = this.form.value.size;
    this.model.winSize = this.form.value.winSize;

    this.router.navigateByUrl('/');
  }
}
