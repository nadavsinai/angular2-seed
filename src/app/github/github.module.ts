import {NgModule} from "@angular/core";
import {RepoBrowser} from "./repo-browser/repo-browser";
import {RepoDetail} from "./repo-detail/repo-detail";
import {RepoList} from "./repo-list/repo-list";
import {Github} from "./shared/github";
@NgModule({
  declarations   : [RepoBrowser, RepoDetail, RepoList],
  providers      : [Github],
  entryComponents: [RepoBrowser]
})
export default class GithubModule {

}
