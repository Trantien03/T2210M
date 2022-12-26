import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import {FavoriesComponent} from "./page/favories/favories.component";

const appRoutes: Routes = [

  {path:'noidung1',component:FavoriesComponent},


];
@NgModule({
  declarations: [
    AppComponent, FavoriesComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
