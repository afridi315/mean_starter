import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddProviderComponent } from './providers/add-provider/add-provider.component';
import { EditProviderComponent } from './providers/edit-provider/edit-provider.component';
import { ProvidersComponent } from './providers/providers.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'providers/add-provider', component: AddProviderComponent },
  { path: 'providers/edit/:id', component: EditProviderComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
