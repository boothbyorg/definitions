"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Definitions;
(function (Definitions) {
    Definitions.LambdaRequest = {
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
    Definitions.LogMessage = {
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
    Definitions.CallbackData = {
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
    Definitions.LambdaResponse = {
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
    ;
    Definitions.GrapplerRequest = {
        type: 'record',
        fields: Definitions.LambdaRequest.fields
    };
    Definitions.Beacon = {
        namespace: "avro",
        protocol: "Beacon",
        types: [
            Definitions.LambdaRequest,
            Definitions.LogMessage,
            Definitions.CallbackData,
            Definitions.LambdaResponse
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
})(Definitions = exports.Definitions || (exports.Definitions = {}));
