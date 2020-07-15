import Service, { inject as service } from "@ember/service";
import { capitalize } from "@ember/string";

// This is a utility service that provides entry structure information to the
// entries routes based on the text object.

export default class EntriesEnvironmentService extends Service {
  @service currentContributor;

  currentText = null;

  columns = [
    {
      name: "Attested Name",
      width: "120px",
      valuePath: "attestedName",
      property: {
        owner: "admin",
        help: "How the place is referred to in the text"
      }
    },
    {
      name: "Linked Place",
      width: "120px",
      valuePath: "place",
      property: {
        help:
          "The place as it appears in the Wandertext database. A marker means it is mappable."
      }
    }
  ];

  buildColumns(text) {
    this.currentText = text.id;
    text.entryProperties.forEach((propObject) => {
      let width = "150px";
      if (propObject.type === "number") {
        width = "75px";
      }

      const name = propObject.inputLabel || capitalize(propObject.name);
      const valuePath = `properties.${propObject.name}`;
      if (
        propObject.owner === this.currentContributor.contributor.id ||
        propObject.owner === "admin"
      ) {
        this.columns.pushObject({
          valuePath,
          width,
          name,
          property: propObject
        });
      }
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

    return this.columns;
  }
}
