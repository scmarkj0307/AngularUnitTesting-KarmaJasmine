import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeforeEachComponent } from './src/app/components/before-each/before-each.component';
import { HeyComponent } from './hey/hey.component';
import { AfterEachComponent } from './Compononents/after-each/after-each.component';
import { StudentComponent } from './Components/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    BeforeEachComponent,
    HeyComponent,
    AfterEachComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
