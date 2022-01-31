import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { VjencanjaComponent } from './home/categories/vjencanja/vjencanja.component';
import { GradoviComponent } from './home/categories/gradovi/gradovi.component';
import { KreativnostComponent } from './home/categories/kreativnost/kreativnost.component';
import { PortretiComponent } from './home/categories/portreti/portreti.component';
import { PrirodaComponent } from './home/categories/priroda/priroda.component';
import { OstaloComponent } from './home/categories/ostalo/ostalo.component';

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
    OstaloComponent
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
