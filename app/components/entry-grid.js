import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { htmlSafe, capitalize } from "@ember/string";
import { action } from "@ember/object";
import {
  validateNumber,
  validatePresence
} from "ember-changeset-validations/validators";

export default class EntryGridComponent extends Component {
  @service store;

  @service notify;

  @service currentContributor;

  @tracked activeEntry = null;

  activeUntrackedEntry = null;

  @tracked model = [];

  @tracked columns = [
    {
      label: "Attested Name",
      width: "120px",
      valuePath: "attestedName"
    },
    {
      label: "Linked Place",
      width: "120px",
      valuePath: "place"
    }
  ];

  limit = 200;

  @tracked isLoading = false;

  @tracked isShowingModal = false;

  @tracked modalPlace = null;

  @action
  toggleModal() {
    this.isShowingModal = !this.isShowingModal;
  }

  @action
  async validateProperty(changeset, property) {
    return changeset.validate(property);
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

    this.activeUntrackedEntry = {
      attestedName: entry.get("attestedName"),
      properties: { ...entry.get("properties") }
    };

    this.activeEntry = entry;
  }

  constructor(...args) {
    super(...args);
    this._buildColumns();
    this.fetchRecords();
  }

  get tableWidth() {
    return htmlSafe(
      "width: " +
        this.columns.reduce((accumulator, column) => {
          return accumulator + parseInt(column.width.replace("px", ""), 10);
        }, 0) +
        "px;"
    );
  }

  async fetchRecords() {
    this.isLoading = true;
    const records = await this.store.query("entry", {
      query: ref =>
        ref
          .where("text", "==", "baburnama-1530") // Hardcode this in.
          .orderBy("properties.folio", "asc")
          .orderBy("properties.sequence", "asc")
          .limit(this.limit)
    });
    this.model.pushObjects(records.toArray());
    this.isLoading = false;
  }

  _buildColumns() {
    const { text } = this.args;
    text.entryProperties.forEach(propObj => {
      let width = "120px";
      if (propObj.type === "number") {
        width = "50px";
      }

      const label = propObj.inputLabel || capitalize(propObj.name);
      const valuePath = `properties.${propObj.name}`;
      this.columns.pushObject({ valuePath, width, label, property: propObj });
    });
    /* Save figuring out dates for later.
    this.columns.pushObject({
      label: "Modified on",
      valuePath: "modifiedOn"
    });
    this.columns.pushObject({
      label: "Created on",
      valuePath: "createdOn"
    });
    */
  }

  async _save() {
    const changeset = this.activeEntry;
    const snapshot = changeset.snapshot();
    try {
      await changeset.validate();
      if (changeset.get("isValid")) {
        changeset
          .get("contributors")
          .pushObject(this.currentContributor.contributor);
        this.entryProps.forEach(property => {
          if (property.type === "number") {
            const number = changeset.get(`properties.${property.name}`);
            changeset.set(`properties.${property.name}`, parseInt(number, 10));
          }
        });
        await changeset.save();
        return this.notify.success(
          `Entry “${changeset.get("attestedName")}” updated.`
        );
      }

      throw changeset.errors;
    } catch (error) {
      if (Array.isArray(error)) {
        error.forEach(message => this.notify.error(message.validation[0]));
      } else {
        this.notify.error(error.message);
      }

      changeset.restore(snapshot);
    }
  }

  entryProps = this.args.text.entryProperties.toArray();

  get EntryValidations() {
    const validations = {
      attestedName: validatePresence(true)
    };
    this.entryProps.forEach(property => {
      const validators = [];
      // Skip read only properties and
      // properties that aren't owned by the current user
      if (
        !property.readOnly &&
        (property.owner === null ||
          property.owner === undefined ||
          property.owner === this.currentContributor.contributor.id)
      ) {
        if (!property.nullable) {
          validators.push(validatePresence(true));
        }

        if (property.type === "number") {
          validators.push(validateNumber(true));
        }
      }

      validations[`properties.${property.name}`] = validators;
    });
    return validations;
  }

  _isEquivalentEntry(a, b) {
    if (a.get("attestedName") !== b.attestedName) {
      return false;
    }

    const aProps = a.get("properties");
    const bProps = b.properties;
    if (
      Object.keys(bProps).filter(prop => {
        // eslint-disable-next-line eqeqeq
        if (aProps[prop] != bProps[prop]) {
          return true;
        }

        return false;
      }).length > 0
    ) {
      return false;
    }

    return true;
  }
}
