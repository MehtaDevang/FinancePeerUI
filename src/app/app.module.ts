import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MainComponent } from './main/main.component';
import { DisplayComponent } from './display/display.component';

const appRoutes: Routes = [
  { path: '', pathMatch:'prefix', redirectTo: 'login' },
  { path: 'login', component: AuthComponent},
  { path: 'main', component: MainComponent},
  { path: 'display', component: DisplayComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
        { useHash: true }
    ),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
