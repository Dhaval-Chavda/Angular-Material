import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatModule } from './appModules/mat.module';
import { BadgesComponent } from './badges/badges.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';

import { FormsModule } from '@angular/forms';
import { CheckBoxComponent } from './check-box/check-box.component';
import { PracticeComponent } from './Practice/Practice.component';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    BadgesComponent,
    BottomSheetComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    CheckBoxComponent,
      PracticeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    FormsModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
