import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class ContributorProfileComponent extends Component {
  @service currentContributor;

  // Needs action if it ever gets reimplemented.
  isMe() {
    return this.args.model.id === this.currentContributor.contributor.username;
  }
}
