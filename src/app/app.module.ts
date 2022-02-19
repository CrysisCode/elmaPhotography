import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './home/footer/footer.component';
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
import { HomeButtonComponent } from './home-button/home-button.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
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
    HomeButtonComponent,
    LoginFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
