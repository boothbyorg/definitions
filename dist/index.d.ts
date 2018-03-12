export declare namespace Definitions {
    const LambdaRequest: {
        name: string;
        type: string;
        fields: ({
            name: string;
            type: string;
            default?: undefined;
        } | {
            name: string;
            type: {
                type: string;
                values: string;
            };
            default: {};
        } | {
            name: string;
            type: string;
            default: string;
        })[];
    };
    const LogMessage: {
        name: string;
        type: string;
        fields: {
            name: string;
            type: string;
        }[];
    };
    const CallbackData: {
        name: string;
        type: string;
        fields: ({
            name: string;
            type: string;
            default?: undefined;
        } | {
            name: string;
            type: string;
            default: number;
        } | {
            name: string;
            type: {
                type: string;
                values: string;
            };
            default: {};
        } | {
            name: string;
            type: string;
            default: string;
        } | {
            name: string;
            type: string;
            default: boolean;
        })[];
    };
    const LambdaResponse: {
        name: string;
        type: string;
        fields: ({
            name: string;
            type: (string | {
                type: string;
                items: string;
            })[];
        } | {
            name: string;
            type: string;
        })[];
    };
    interface IHttpHeaders {
        [key: string]: string;
    }
    /**
     * This maps to the Avro GrapplerRequest Type.
     */
    interface ILambdaRequest {
        requestId: string;
        httpMethod: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
        httpParams?: object;
        httpBody: string;
        enqueuedAt: number;
        expiresAt: number;
        callbackQueueName: string;
    }
    interface ILambdaResponse {
        requestId: string;
        statusCode: number;
        headers?: IHttpHeaders;
        body: string;
        isBase64: boolean;
    }
    const GrapplerRequest: {
        type: string;
        fields: ({
            name: string;
            type: string;
            default?: undefined;
        } | {
            name: string;
            type: {
                type: string;
                values: string;
            };
            default: {};
        } | {
            name: string;
            type: string;
            default: string;
        })[];
    };
    const GrapplerResponse: {
        type: string;
        fields: ({
            name: string;
            type: string;
            default?: undefined;
        } | {
            name: string;
            type: string;
            default: number;
        } | {
            name: string;
            type: {
                type: string;
                values: string;
            };
            default: {};
        } | {
            name: string;
            type: string;
            default: string;
        } | {
            name: string;
            type: string;
            default: boolean;
        })[];
    };
    const Beacon: {
        namespace: string;
        protocol: string;
        types: ({
            name: string;
            type: string;
            fields: ({
                name: string;
                type: string;
                default?: undefined;
            } | {
                name: string;
                type: string;
                default: number;
            } | {
                name: string;
                type: {
                    type: string;
                    values: string;
                };
                default: {};
            } | {
                name: string;
                type: string;
                default: string;
            } | {
                name: string;
                type: string;
                default: boolean;
            })[];
        } | {
            name: string;
            type: string;
            fields: ({
                name: string;
                type: (string | {
                    type: string;
                    items: string;
                })[];
            } | {
                name: string;
                type: string;
            })[];
        })[];
        messages: {
            ProcessRequest: {
                request: {
                    name: string;
                    type: string;
                }[];
                response: string;
            };
        };
    };
}
