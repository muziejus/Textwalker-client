import Service, { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class CurrentContributorService extends Service {
  @service session;

  @service store;

  @tracked contributor;

  async load() {
    let contributor;
    if (this.session.isAuthenticated) {
      if (this.contributor) {
        contributor = this.contributor;
      } else {
        const githubUser = await this.store.findRecord("github-user", "#");
        try {
          const contributor = await this.store.findRecord(
            "contributor",
            githubUser.login
          );
          this.contributor = contributor;
        } catch {
          this.session.invalidate();
        }
      }
    } else {
      this.contributor = null;
      contributor = null;
    }

    return contributor;
  }
}
