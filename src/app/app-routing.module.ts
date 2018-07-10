import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: 'chat',
  component: ChatComponent
}, { // redirect to chat route as this is home route
  path: '',
  pathMatch: 'full',
  redirectTo: 'chat'
}, { // redirect to notfound page when there is no accepted route
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  ChatComponent,
  NotFoundComponent
];
