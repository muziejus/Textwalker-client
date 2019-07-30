import Service, { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import config from "wandertext/config/environment";

export default class CurrentContributorService extends Service {
  @service session;

  @service store;

  @tracked contributor = null;

  async load() {
    if (this.session.isAuthenticated) {
      if (!this.contributor) {
        try {
          if (config.environment === "production") {
            const { email } = this.session.data.authenticated.user;
            const query = await this.store.query("contributor", {
              query: ref => ref.where("email", "==", email)
            });
            const contributor = query.firstObject;
            if (contributor.enabled) {
              this.contributor = contributor;
              return this.contributor;
            }

            throw new Error("user is not enabled");
          } else {
            this.contributor = await this.store.findRecord(
              "contributor",
              "muziejus"
            );
            return this.contributor;
          }
        } catch (error) {
          console.log(error);
          this.session.invalidate();
        }
      }

      return this.contributor;
    }

    this.contributor = null;
    return null;
  }
}
