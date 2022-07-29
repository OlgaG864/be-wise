import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursesComponent } from './curses/curses.component';
import { LecturersComponent } from './lecturers/lecturers/lecturers.component';

const routes: Routes = [
  { path: '', component: LecturersComponent },
  { path: 'curses-component', component: CursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
