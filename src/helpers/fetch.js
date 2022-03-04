const baseURL = process.env.REACT_APP_API_URL;

//lo exporte para que quede un codigo mas limpio, solo lo utilizo en la autenticación
export const fetch1 =(endpoint,data,method='GET') => {

    const url =`${baseURL}/${endpoint}`;


    if(method === 'GET'){
        return fetch(url)
    }else{
        return fetch(url,{
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

}