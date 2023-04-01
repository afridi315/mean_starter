import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProvidersComponent } from './providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { EditProviderComponent } from './edit-provider/edit-provider.component';
import { DeleteProviderComponent } from './delete-provider/delete-provider.component';
import { DetailsProviderComponent } from './details-provider/details-provider.component';



@NgModule({
  declarations: [
    ProvidersComponent,
    AddProviderComponent,
    EditProviderComponent,
    DeleteProviderComponent,
    DetailsProviderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ProvidersComponent,
    ReactiveFormsModule,
    AddProviderComponent,
    EditProviderComponent,
    DeleteProviderComponent,
    DetailsProviderComponent
  ]
})
export class ProvidersModule { }
