import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HexFilterPipe } from './pipes';
import { HexButtonComponent } from './components';


const SHARED_MODULES: any[] = [
  CommonModule,
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
];

const SHARED_COMPONENT: any[] = [
  HexButtonComponent
];

const SHARED_PIPES: any[] = [HexFilterPipe];

@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENT,
    SHARED_PIPES
  ],
  declarations: [...SHARED_COMPONENT, ...SHARED_PIPES],
})
export class SharedModule {}
