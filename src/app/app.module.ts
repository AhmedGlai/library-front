import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule,Routes  } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksListComponent },
  { path: 'category', component: CategoryComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BooksListComponent,
    BooksDetailsComponent,
    CategoryComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SlickCarouselModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
