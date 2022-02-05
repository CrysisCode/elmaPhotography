import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './home/footer/footer.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { HeaderComponent } from './home/header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { VjencanjaComponent } from './categories/vjencanja/vjencanja.component';
import { GradoviComponent } from './categories/gradovi/gradovi.component';
import { KreativnostComponent } from './categories/kreativnost/kreativnost.component';
import { PortretiComponent } from './categories/portreti/portreti.component';
import { PrirodaComponent } from './categories/priroda/priroda.component';
import { OstaloComponent } from './categories/ostalo/ostalo.component';
import { GallerySelectorComponent } from './categories/gallery-selector/gallery-selector.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    MobileHeaderComponent,
    HeaderComponent,
    CategoriesComponent,
    VjencanjaComponent,
    GradoviComponent,
    KreativnostComponent,
    PortretiComponent,
    PrirodaComponent,
    OstaloComponent,
    GallerySelectorComponent,
    NavigatorComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
