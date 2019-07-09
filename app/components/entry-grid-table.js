import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { capitalize } from "@ember/string";
import { isEmpty } from "@ember/utils";
import Table from "ember-light-table";
import {
  validateNumber,
  validatePresence
} from "ember-changeset-validations/validators";

export default class EntryGridTableComponent extends Component {
  @service store;

  @service currentContributor;

  @tracked page = 0;

  limit = 20;

  @tracked isLoading = false;

  canLoadMore = true;

  enableSync = true;

  model = [];

  meta = null;

  @tracked columns = [
    {
      label: "Attested Name",
      valuePath: "attestedName",
      width: "150px"
    },
    {
      label: "Linked Place",
      valuePath: "place",
      width: "150px"
    }
  ];

  @tracked table = Table.create({
    columns: this.columns,
    rows: this.model,
    enableSync: this.enableSync
  });

  @action
  onScrolledToBottom() {
    // If (this.canLoadMore) {
    //   this.page = this.page + 1;
    //   this.fetchRecords();
    // }
    console.log("bong scrolled to bottom");
  }

  constructor(...args) {
    super(...args);
    this._buildColumns();
    this.fetchRecords();
  }

  async fetchRecords() {
    this.isLoading = true;
    const records = await this.store.query("entry", {
      query: ref =>
        ref
          .where("text", "==", "baburnama-1530")
          .orderBy("properties.folio", "asc")
          .orderBy("properties.sequence", "asc")
          .limit(this.limit)
    });
    this.isLoading = false;
    this.model.pushObjects(records.toArray());
    this.meta = records.meta;
    this.canLoadMore = !isEmpty(records);
  }

  _buildColumns() {
    const { text } = this.args;
    text.entryProperties.forEach(propObj => {
      let width = "150px";
      if (propObj.type === "number") {
        width = "60px";
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
}
