import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared';
import { CoreModule } from './core';
import { PostsModule } from './modules/posts/posts.module';


// AOT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  /**
   *  to prevent the browser to cache translation files
   */
  const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
  return new TranslateHttpLoader(
    http,
    './assets/i18n/',
    '.json?v=' + random
  );
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
