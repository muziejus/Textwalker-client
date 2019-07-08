import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { capitalize } from "@ember/string";
import Table from "ember-light-table";

export default class EntryGridTableComponent extends Component {
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

  @tracked table = Table.create({
    columns: this.columns,
    rows: this.args.entries
  });

  constructor(...args) {
    super(...args);
    this._buildColumns(this.args.text);
  }

  _buildColumns(text) {
    text.entryProperties.forEach(propObj => {
      const label = propObj.inputLabel || capitalize(propObj.name);
      const valuePath = `properties.${propObj.name}`;
      this.columns.pushObject({ valuePath, label, property: propObj });
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
}
