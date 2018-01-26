import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule } from "@angular/material";

let matModules = [
  MatButtonModule,
  MatCheckboxModule
];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule { }
