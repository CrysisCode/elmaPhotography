import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CategoriesComponent } from './categories/categories.component';
import { GallerySelectorComponent } from './categories/gallery-selector/gallery-selector.component';
import { GradoviComponent } from './categories/gradovi/gradovi.component';
import { KreativnostComponent } from './categories/kreativnost/kreativnost.component';
import { OstaloComponent } from './categories/ostalo/ostalo.component';
import { PortretiComponent } from './categories/portreti/portreti.component';
import { PrirodaComponent } from './categories/priroda/priroda.component';
import { VjencanjaComponent } from './categories/vjencanja/vjencanja.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'blog', component: BlogComponent },
  { path: 'categories', component: CategoriesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/categories/gallery-selector'},
      { path: 'gallery-selector', component: GallerySelectorComponent },
      { path: 'vjencanja', component: VjencanjaComponent },
      { path: 'gradovi', component: GradoviComponent },
      { path: 'portreti', component: PortretiComponent },
      { path: 'priroda', component: PrirodaComponent },
      { path: 'kreativnost', component: KreativnostComponent },
      { path: 'ostalo', component: OstaloComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
