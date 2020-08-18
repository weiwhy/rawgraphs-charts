export const dimensions = [
  {
      id: "series",
      name: "series",
      validTypes: ["number", "string", "date"],
      required: false,
      operation: "get",
    },
  {
    id: "lines",
    name: "lines",
    validTypes: ["number", "string", "date"],
    required: false,
    operation: "get",
  },
  {
    id: "x",
    name: "x",
    operation: "get",
    validTypes: ["number", "date"],
    required: true,
  },
  {
    id: "y",
    name: "y",
    operation: "get",
    validTypes: ["number", "date"],
    required: true,
  },
  {
    id: "color",
    name: "color",
    operation: "get",
    validTypes: ["number", "string", "date"],
    required: false,
  },
];
