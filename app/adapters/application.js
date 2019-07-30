/* eslint import/no-mutable-exports: 0 */
import DS from "ember-data";
import config from "wandertext/config/environment";
import FirestoreAdapter from "emberfire/adapters/firestore";

class MirageAdapter extends DS.JSONAPIAdapter {}

class EmberfireAdapter extends FirestoreAdapter {
  enablePersistence = true;

  persistenceSettings = { synchronizeTabs: true };
}

let Adapter = MirageAdapter;

if (config.environment === "production") {
  Adapter = EmberfireAdapter;
}

export default Adapter;
