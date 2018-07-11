import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

//Modulos
import { ModuloEmailModule } from './moduloemail/modulo-email.module';
import { AdminModule } from './admin/admin.module';

//Componentes
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';

//Servicios
import { userService } from './services/user.service';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeeperComponent,
    SimpleTinyComponent,
    LoginComponent,
    RegisterComponent,
    ProfileEditComponent,
    AnimalDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    ModuloEmailModule, 
    AdminModule,
    //appRoutingProviders
  ],
  providers: [
    //appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
