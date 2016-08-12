import {Resolve} from "@angular/router";
export class GithubResolver implements Resolve<any> {
  resolve() {
    return new Promise((resolve, reject)=> {
      require.ensure(['./github.module'], (require)=> {
        require('./github.module');
        resolve();
      }, 'github')
    });
    // return System.import('./github.module');
  }

}
