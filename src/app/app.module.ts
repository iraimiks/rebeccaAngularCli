import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { ContactBtnComponent } from './header/contact-btn/contact-btn.component';
import { HeaderComponent } from './header/header.component';
import { SectioncontComponent } from './sectioncont/sectioncont.component';
import { FormComponent } from './header/contact-btn/form/form.component';
import { FooterComponent } from './footer/footer.component';
import { TablesectComponent } from './sectioncont/tablesect/tablesect.component';
import { Tablesect1Component } from './sectioncont/tablesect1/tablesect1.component';
import { Tablesect4Component } from './sectioncont/tablesect4/tablesect4.component';
import { MapmoduleComponent } from './footer/mapmodule/mapmodule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactBtnComponent,
    HeaderComponent,
    SectioncontComponent,
    FormComponent,
    FooterComponent,
    TablesectComponent,
    Tablesect1Component,
    Tablesect4Component,
    MapmoduleComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
 }
