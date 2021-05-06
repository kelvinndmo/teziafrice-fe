import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  
  imports: [SharedModule, CommonModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
