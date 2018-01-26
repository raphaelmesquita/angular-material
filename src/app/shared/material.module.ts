import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule, MatIconModule } from "@angular/material";

let matModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule
];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule { }
