const baseUrl = process.env.REACT_APP_API_URL;

export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type HttpResponse<T = any> = {
    ok: boolean;
    data?: T;
}


export const fetchWithOuthToken = async<T = any>(endpoint: string, data?: Record<string, unknown>, method: HttpMethods = 'GET'): Promise<HttpResponse<T>> => {

    const url = `${baseUrl}/${endpoint}`;

    console.log(url);

    const init = {
        method,
    } as RequestInit;

    if (method === 'POST' || method === 'PUT' || method === 'PATCH' ){
        init.headers =  {
            'Content-type': 'application/json',
        };
    }

    init.body = JSON.stringify(data);
    
    const resp = await fetch(url, init);
    if (resp.status !== 201){
        return {
            ok: false,
        }
    }
    
    const response = await resp.json();
    return {
        data: response,
        ok: true,
    };
    
};

