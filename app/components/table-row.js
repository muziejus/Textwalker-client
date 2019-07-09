import RowComponent from "ember-light-table/components/lt-row";
import { action } from "@ember/object";

export default class TableRowComponent extends RowComponent {
  get entry() {
    if (this.row) {
      return this.row.content;
    }

    return null;
  }

  @action
  async showModal(data) {
    this.isShowingModal = true;
    this.modalPlace = data;
  }

  @action
  setActiveEntry(entry) {
    if (this.activeEntry !== null && this.activeEntry !== entry) {
      if (
        !this._isEquivalentEntry(this.activeEntry, this.activeUntrackedEntry)
      ) {
        this._save();
      }
    }
  }

  @action
  async validateProperty(changeset, property) {
    return changeset.validate(property);
  }
}
