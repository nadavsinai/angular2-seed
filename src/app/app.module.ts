import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig, AsyncRoutes} from "./app.routes";
import {AppComponent} from "./app";
import {Github} from "./github/shared/github";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {About} from './about/about';
import {Home} from './home/home';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {provideWebpack} from '@angularclass/webpack-toolkit';

@NgModule({
  declarations: [AppComponent, About, Home],
  imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers: [provideWebpack(AsyncRoutes),Github, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
