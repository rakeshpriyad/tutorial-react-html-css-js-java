const API = process.env.REACT_APP_API || 'http://localhost:8080/rest';

export const fetch = async (method, endpoint, body) => {
    try {
        const response = await fetch(`${API}${endpoint}`, {
            method,
            body: body && JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
                // authorization: `Bearer ${await this.props.authService.getAccessToken()}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.error(error);
        return error;
    }

}



export const save = async (endpoint, obj) => {
    //console.log(obj)
    await this.fetch('post', endpoint, obj);
}

export const update = async (endpoint, obj) => {
    if (obj && obj.id) {
        //console.log(obj)
        await this.fetch('put', `${endpoint}/${obj.id}`, obj);
    }
}