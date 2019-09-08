const baseUrl = 'http://localhost:3000/api';

export const callAPI = (endpoint, method = 'GET', data, option) => {
    return fetch(`${baseUrl}/${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        ...option
    })
}