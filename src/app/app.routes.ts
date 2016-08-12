import {Routes} from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';
import {GithubResolver} from "./github/github.resolver";
export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', terminal: true},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'github', loadChildren: './github.bundle.js', resolve: GithubResolver}
];

