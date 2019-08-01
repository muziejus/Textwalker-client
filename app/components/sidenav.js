import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class SidenavComponent extends Component {
  @service sidenav;

  @action
  toggleSidenav() {
    if (this.sidenav.show) {
      this.sidenav.show = false;
    } else {
      this.sidenav.show = true;
    }
  }
}
