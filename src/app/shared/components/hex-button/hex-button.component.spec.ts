import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HexButtonComponent } from './hex-button.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateCustomLoader } from '../../mock';

describe('HexButtonComponent', () => {
  let component: HexButtonComponent;
  let fixture: ComponentFixture<HexButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexButtonComponent ],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateCustomLoader
          }
        })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(inject([TranslateService], translate => {
    translate.use('en');
    fixture = TestBed.createComponent(HexButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
