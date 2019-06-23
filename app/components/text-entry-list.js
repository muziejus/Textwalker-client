import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { capitalize } from "@ember/string";
import { action } from "@ember/object";

export default class TextEntryListComponent extends Component {
  @tracked sorts = [];

  @tracked columns = [
    {
      label: "Attested Name",
      valuePath: "attestedName"
    },
    {
      label: "Linked Place",
      valuePath: "place"
    }
  ];

  // @tracked entries = this.args.text.entries;

  @tracked isShowingModal = false;

  @tracked modalPlace = null;

  @action
  toggleModal() {
    this.isShowingModal = !this.isShowingModal;
  }

  @action
  async showModal(data) {
    this.isShowingModal = true;
    this.modalPlace = data;
  }

  constructor(...args) {
    super(...args);
    this._buildColumns(this.args.text);
    this._buildSorts(this.args.text);
  }

  _buildColumns(text) {
    text.entryProperties.forEach(propObj => {
      const label = propObj.inputLabel || capitalize(propObj.name);
      const valuePath = `properties.${propObj.name}`;
      this.columns.pushObject({ valuePath, label, property: propObj });
    });
    this.columns.pushObject({
      label: "Created On",
      valuePath: "createdOn"
    });
  }

  _buildSorts(text) {
    text.entrySort.forEach(sort => {
      this.sorts.pushObject({
        valuePath: `properties.${sort}`,
        isAscending: true
      });
    });
  }
}
