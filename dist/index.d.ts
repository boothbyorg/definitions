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
            default?: undefined;
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
            type: string;
        } | {
            name: string;
            type: (string | {
                type: string;
                items: string;
            })[];
        })[];
    };
    interface IHttpHeaders {
        [key: string]: string;
    }
    interface ILambdaRequest {
        requestId: string;
        httpMethod: string;
        httpParams: IHttpHeaders;
        httpBody: string;
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
                default?: undefined;
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
                type: string;
            } | {
                name: string;
                type: (string | {
                    type: string;
                    items: string;
                })[];
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
