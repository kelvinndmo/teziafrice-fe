import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
  exports: [FormsModule, ReactiveFormsModule, MaterialModule],
  providers: [],
})
export class SharedModule {}
