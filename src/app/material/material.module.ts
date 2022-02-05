import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as MaterialT from '@angular/material/toolbar';
import * as MaterialG from '@angular/material/grid-list';
import * as MaterialFF from '@angular/material/form-field';
import * as MaterialI from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MaterialT.MatToolbarModule,
    MaterialG.MatGridListModule,
    MaterialFF.MatFormFieldModule,
    MaterialI.MatInputModule
  ],
  exports: [
    MaterialT.MatToolbarModule,
    MaterialG.MatGridListModule,
    MaterialFF.MatFormFieldModule,
    MaterialI.MatInputModule
  ],
  declarations: []
})
export class MaterialModule { }