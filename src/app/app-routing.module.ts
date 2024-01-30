import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesComponent } from './badges/badges.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { PracticeComponent } from './Practice/Practice.component';

const routes: Routes = [
  { path: 'badges', component: BadgesComponent },
  { path: 'bottom-sheet', component: BottomSheetComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'check-box', component: CheckBoxComponent },
  {path: '', component:PracticeComponent},
  {path:'',redirectTo:'Practice',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
