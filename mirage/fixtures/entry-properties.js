const textId = "baburnama-1530";

export default [
  {
    id: "page",
    name: "page",
    type: "number",
    help: "thee page number",
    inputLabel: "Page",
    readOnly: false,
    owner: "admin",
    nullable: true,
    textId
  },
  {
    id: "sequence",
    name: "sequence",
    type: "number",
    inputLabel: "Seq.",
    readOnly: false,
    owner: "admin",
    nullable: true,
    textId
  },
  {
    id: "special",
    name: "special",
    type: "string",
    help: "something special",
    readOnly: false,
    inputLabel: "Speciale",
    owner: "muziejus",
    nullable: true,
    textId
  },
  {
    id: "tree",
    name: "tree",
    type: "string",
    help: "A Tree",
    readOnly: false,
    inputLabel: "Treee",
    owner: "muziejus",
    nullable: true,
    textId
  }
];
