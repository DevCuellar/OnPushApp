import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserEventsComponent } from './components/user-events/user-events.component';
import { UserEventsPresenterComponent } from './components/user-events/user-events-presenter/user-events-presenter.component';
import { SignalsComponent } from './components/signals/signals.component';
import { SignalsPresenterComponent } from './components/signals/signals-presenter/signals-presenter.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { InputsPresenterComponent } from './components/inputs/inputs-presenter/inputs-presenter.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { DeveloperPresenterComponent } from './components/developer/developer-presenter/developer-presenter.component';
import { AsyncPresenterComponent } from './components/async/async-presenter/async-presenter.component';
import { AsyncComponent } from './components/async/async.component';
import { FolderAComponent } from './components/_folders/folder-a/folder-a.component';
import { FolderBComponent } from './components/_folders/folder-b/folder-b.component';
import { FolderCComponent } from './components/_folders/folder-c/folder-c.component';

@NgModule({
  declarations: [
    AppComponent,
    UserEventsComponent,
    UserEventsPresenterComponent,
    SignalsComponent,
    SignalsPresenterComponent,
    InputsComponent,
    InputsPresenterComponent,
    DeveloperComponent,
    DeveloperPresenterComponent,
    AsyncPresenterComponent,
    AsyncComponent,
    FolderAComponent,
    FolderBComponent,
    FolderCComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
