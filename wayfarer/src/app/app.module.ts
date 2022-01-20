import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  cities = [
    {
      name: 'New York',
      image: '',
      posts: [
        {
          title: '',
          content: '',
        },
      ],
    },
  ];
}
