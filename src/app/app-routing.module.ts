import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DataScreenComponent } from './data-screen/data-screen.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';

const routes: Routes = [
  {path: 'display-data', component: DisplayDataComponent},
  {path: 'edit-dialog', component: EditDialogComponent},
  {path: 'data-screen', component: DataScreenComponent},
  {path: 'welcome-page', component: WelcomePageComponent},
  {path: 'thanks-page', component: ThanksPageComponent},
  {path: '', redirectTo: 'welcome-page', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
