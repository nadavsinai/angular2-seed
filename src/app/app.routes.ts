import {Routes} from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';
import {WebpackAsyncRoute} from '@angularclass/webpack-toolkit';


export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', terminal: true},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {
    path: 'github', component: 'Github', canActivate: [WebpackAsyncRoute],
    children: [
      {path: '', component: 'RepoList'},
      {
        path: ':org', component: 'RepoList', canActivate: [WebpackAsyncRoute],
        children: [
          {path: '', component: 'RepoDetail'},
          {path: ':repo', component: 'RepoDetail'}
        ]
      }]
  }
];
export const AsyncRoutes = {"github": require('es6-promise!./github/github.module.ts')};

