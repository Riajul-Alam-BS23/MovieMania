
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
// import { CoreModule } from './core/core.module';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from './shared/shared.module';
import { MovieModule } from './features/movie/movie.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MovieInterceptor } from './core/interceptors/movie.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { LayoutModule } from './core/shell/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // MaterialModule,
    // CoreModule,
    LayoutModule,
    HttpClientModule,
    HomeModule,
    SharedModule,
    MovieModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, logOnly: !isDevMode()
    }),
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MovieInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



