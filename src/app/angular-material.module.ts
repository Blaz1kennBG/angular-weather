import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class AngularMaterialModule {}
