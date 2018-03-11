declare const Beacon: {
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
export { Beacon };
