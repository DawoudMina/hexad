import { Component, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './core';

@Component({
  selector: 'hex-root',
  template: `
    <div class='container'>
      <div class='header'>
        <div class='language-section'>
          <img
            (click)='setTranslateLanguage(languages.English)'
            [ngClass]='{ active: currentLanguage === languages.English }'
            src='../../../assets/images/english.png'
            alt='English Language'
          />
          <img
            (click)='setTranslateLanguage(languages.Deutsch)'
            [ngClass]='{ active: currentLanguage === languages.Deutsch }'
            src='../../../assets/images/german.png'
            alt='German Language'
          />
        </div>
        <br />

        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  public languages = Language;
  public currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.setTranslateLanguage();
  }

  setTranslateLanguage(lang: string = this.languages.English) {
    this.currentLanguage = lang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
