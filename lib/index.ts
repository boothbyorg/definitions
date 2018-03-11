const Beacon = {
  namespace: "avro",
  protocol: "Beacon",
  types: [
    {
      name: "LambdaRequest",
      type: "record",
      fields: [
        {
          name: "requestId",
          type: "string",
        },
        {
          name: "httpMethod",
          type: "string",
        },
        {
          name: "httpParams",
          type: {type: "map", values: "string"},
          default: {},
        },
        {
          name: "httpBody",
          type: "string",
        }
      ],
    },
    {
      name: "LogMessage",
      type: "record",
      fields: [
        {
          name: "message",
          type: "string",
        },
        {
          name: "eventTimestamp",
          type: "string",
        },
        {
          name: "severity",
          type: "string",
        }
      ],
    },
    {
      name: "CallbackData",
      type: "record",
      fields: [
        {
          name: "statusCode",
          type: "int",
          default: 200,
        },
        {
          name: "headers",
          type: {type: "map", values: "string"},
          default: {},
        },
        {
          name: "body",
          type: "string",
        },
        {
          name: "isBase64",
          type: "boolean",
          default: false,
        }
      ],
    },
    {
      name: "LambdaResponse",
      type: "record",
      fields: [
        {
          name: "requestId",
          type: "string",
        },
        {
          name: "logs",
          type: [
            "null",
            { type: "array", items: "LogMessage" }
          ],
        },
        {
          name: "callbackData",
          type: "CallbackData",
        }
      ],
    }
  ],
  messages: {
    ProcessRequest: {
      request: [
        {
          name: "lambdaRequest",
          type: "LambdaRequest",
        }
      ],
      response: "LambdaResponse",
    },
  },
};

export {Beacon}
