import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ViewChildElementRefComponent } from './view-child-element-ref/view-child-element-ref.component';
import { TemplateRefDemoComponent } from './template-ref-demo/template-ref-demo.component';
 

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ViewChildElementRefComponent,
    TemplateRefDemoComponent,
     
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
