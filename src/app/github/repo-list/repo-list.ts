import {Component} from '@angular/core';
import {Github} from '../shared/github';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'repo-list',
  styleUrls: ['./repo-list.css'],
  templateUrl: './repo-list.html',
})
export class RepoList {
  repos: Observable<any> = this.route.params
    .filter(params => params['org'])
    .switchMap(params =>this.github.getReposForOrg(params['org']));

  constructor(public github: Github, private route: ActivatedRoute) {
  }

}
