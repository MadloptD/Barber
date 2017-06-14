type Action<T> = () => T;

export class BaseRequest {
    static handleError = (error: any): Promise<any> => {
        return Promise.reject(error.message || error);
    };

    protected baseurl: string;

    static token: string;
    static getToken: Action<string> = () => BaseRequest.token;
    static setToken: (token: string) => void = (token) => BaseRequest.token = token;

    fetch(url: string, config: Object): Promise<any> {
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        if (BaseRequest.getToken()) {
            headers = { ...headers, "cookie": BaseRequest.token };
        }

        return fetch(this.baseurl + url, Object.assign({ headers: headers }, config))
            .then(response => {
                if (!response.status || response.status < 200 || response.status >= 300) {
                    throw response;
                }
                return response;
            });
    }
}