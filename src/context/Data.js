const api = (path, method = 'GET', body = null, requireAuth = false, credentials = null) => {
    const url = 'http://localhost:5000/api' + path;

    const options = {
        method,
        headers: {
            'Content-Type': 'appliccation/json; charset=utf-8'
        }
    }

    if(body !== null){
        options.body = JSON.stringify(body);
    }

    return fetch( url, options);
}

export const sendEmail = async(customerInfo, orderInfo) => {
    const response = await api(`/email`,'POST', null);
    if(response.status === 200){
        return response.json().then(data => data)
    }
    else if(response.status === 401) {
        return null;
    }
    else{
        throw new Error();
    }
}