import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
