import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LecturersModule } from './lecturers/lecturers.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { CursesComponent } from './curses/curses.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CursesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LecturersModule,
    SharedModule,
    CoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
