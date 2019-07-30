/* eslint no-console: 1 */
import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import firebase from "firebase/app";
import config from "wandertext/config/environment";

export default class IndexBoxComponent extends Component {
  @service firebaseApp;

  @service router;

  @service store;

  @service currentContributor;

  @service card;

  @service session;

  @tracked isShowingModal = false;

  @tracked githubUser = null;

  @tracked awaitingAuthentication = false;

  @tracked awaitingWandertextProfile = false;

  @tracked awaitingContributor = false;

  @tracked loggedIn = false;

  @tracked loginError = false;

  get loginProvider() {
    return config.environment === "production" ? "Google" : "Dev/GitHub";
  }

  didInsertElement() {
    this.card.reset();
  }

  @action
  toggleModal() {
    this.isShowingModal = !this.isShowingModal;
  }

  @action
  logout() {
    this.session.invalidate();
  }

  @action
  closeFailure() {
    this.toggleModal();
    this.session.invalidate();
  }

  @action
  async login() {
    this.awaitingAuthentication = true;
    let loginSuccess;
    if (config.environment === "production") {
      // This will need some tinkering.
      loginSuccess = this._loginWithGoogle();
    } else {
      loginSuccess = this._loginWithGitHub();
    }

    if (loginSuccess) {
      this.loggedIn = true;
      this.isShowingModal = false;
      this.router.transitionTo("workbench");
    } else {
      throw new Error("Unsuccessful login");
    }
  }

  async _loginWithGitHub() {
    await this.session.authenticate("authenticator:torii", "github");
    // Well, *this* looks risky. All of the looking up, etc., is done in currentContributor.load, however.
    return true;
  }

  async _loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    try {
      const auth = await this.firebaseApp.auth();
      const signinResult = await auth.signInWithPopup(provider);
      this.awaitingWandertextProfile = true;
      // All of the below might be surplus to requirements as currentContributor.load already does this.
      const query = await this.store.query("contributor", {
        query: ref => ref.where("email", "==", signinResult.user.email)
      });
      return query.firstObject;
    } catch (error) {
      console.log("error in login", error);
      this.currentContributor.contributor = null;
      this.loginError = true;
    }
  }
}
