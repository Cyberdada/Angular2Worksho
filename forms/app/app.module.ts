import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule }   from '@angular/forms';
import {AppComponent} from './app';
import {Form1Component} from './form1.component';
import {Form2Component} from './form2.component';
import {Form3Component} from './form3.component';
import {Form4Component} from './form4.component';
import {Form5Component} from './form5.component';
import {Form6Component} from './form6.component';
import {SwitchComponent} from './appswitch.component/appswitch.component';
import {BananaboxComponent} from './bananabox.component';


import { ControlMessages } from './control-messages.component';

@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule , 
                  FormsModule],
  declarations: [ AppComponent,
                  Form1Component,
                  Form2Component,
                  Form3Component,
                  Form4Component,
                  Form5Component,
                  Form6Component,
                  BananaboxComponent,
                  SwitchComponent,
                  ControlMessages ],
  bootstrap: [AppComponent]
})
export class AppModule { }

