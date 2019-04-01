import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppBootstrapModule } from './components/bootstrap.module';
import { AppComponent } from './app.component';

// Components
import { JobListPageComponent } from './components/job-list-page.component';
import { JobLRequestPageComponent } from './components/job-request-page.component';

// Pipes
import { DatePipe } from './pipes/date.pipe';
import { StatusPipe } from './pipes/status.pipe';

const appRoutes: Routes = [
  { path: 'joblist', component: JobListPageComponent },
  { path: '', component: JobListPageComponent, pathMatch: 'full' },
  { path: '**', component: JobListPageComponent, pathMatch: 'full' },
  { path: 'reuqest', component: JobRequestPageComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        DatePipe,
        JobListPageComponent,
        JobRequestPageComponent,
        StatusPipe
    ],
    imports: [
        AppBootstrapModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
