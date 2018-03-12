export namespace Definitions {
  export const LambdaRequest = {
    name: "LambdaRequest",
    type: "record",
    fields: [
      {
        name: "requestId",
        type: "string",
      },
      {
        name: "callbackQueueName",
        type: "string"
      },
      {
        name: "enqueuedAt",
        type: "long"
      },
      {
        name: "expiresAt",
        type: "long"
      },
      {
        name: "httpMethod",
        type: "string",
      },
      {
        name: "httpParams",
        type: { type: "map", values: "string" },
        default: {},
      },
      {
        name: "httpBody",
        type: "string",
        default: ""
      },
      {
        name: "httpQueryParams",
        type: "string",
        default: ""
      }
    ],
  };


  export const LogMessage = {
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
  };

  export const CallbackData = {
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
        type: { type: "map", values: "string" },
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
    ]
  };

  export const LambdaResponse = {
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
  };

  export interface IHttpHeaders {
    [key: string]: string;
  }

  /**
   * This maps to the Avro GrapplerRequest Type.
   */
  export interface ILambdaRequest {
    requestId: string;
    httpMethod: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    httpParams?: object;
    httpBody: string;
    enqueuedAt: number;
    expiresAt: number;
    callbackQueueName: string;
  };

  export const GrapplerRequest = {
    type: 'record',
    fields: LambdaRequest.fields
  };

  export const GrapplerResponse = {
    type: 'record',
    fields: LambdaRequest.fields
  }

  export const Beacon = {
    namespace: "avro",
    protocol: "Beacon",
    types: [
      LambdaRequest,
      LogMessage,
      CallbackData,
      LambdaResponse
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
}
