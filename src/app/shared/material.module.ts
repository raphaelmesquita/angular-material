import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule, MatIconModule } from "@angular/material";

const matModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule
];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule { }
