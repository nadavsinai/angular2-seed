import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Github} from '../shared/github';
import {Observable} from 'rxjs';

import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'repo-detail',
  styleUrls: ['./repo-detail.css'],
  templateUrl: './repo-detail.html'
})
export class RepoDetail {
  public repoDetails: Observable<any> = this.route.params
    .map(params => ({org: this.route.parent.snapshot.params['org'], repo: params['repo'] || ''}))
    .filter(params => params.repo)
    .switchMap((params) => this.github.getRepoForOrg(params.org, params.repo));

  constructor(public github: Github, private route: ActivatedRoute) {
  }


}
