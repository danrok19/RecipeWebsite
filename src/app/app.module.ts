import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { MealsComponent } from './meals/meals.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { DeleteMealComponent } from './meal/delete-meal/delete-meal.component';
import { EditMealComponent } from './meal/edit-meal/edit-meal.component';
import { MealProtoComponent } from './meal-proto/meal-proto.component';
import { MealsProtoComponent } from './meals-proto/meals-proto.component';
import { CategoryProtoComponent } from './category-proto/category-proto.component';
import { CategoriesProtoComponent } from './categories-proto/categories-proto.component';
import { AddMealProtoComponent } from './add-meal-proto/add-meal-proto.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginProtoComponent } from './login-proto/login-proto.component';



@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    MealComponent,
    HeaderComponent,
    MenuComponent,
    AddMealComponent,
    DeleteMealComponent,
    EditMealComponent,
    MealProtoComponent,
    MealsProtoComponent,
    CategoryProtoComponent,
    CategoriesProtoComponent,
    AddMealProtoComponent,
    LoginProtoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
