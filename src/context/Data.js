const api = (path, method = 'GET', body = null, requireAuth = false, credentials = null) => {
    const url = 'http://localhost:5000/api' + path;

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    }

    if(body !== null){
        options.body = JSON.stringify(body);
    }

    return fetch(url, options);
}

export const sendEmail = async(data) => {
    const response = await api(`/sendEmail`,'POST', data, false, null);
    if(response.status === 200){
        return response.status;
    }
    else if(response.status === 401) {
        return response.status;
    }
    else{
        throw new Error();
    }
}