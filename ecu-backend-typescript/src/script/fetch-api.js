export const submitData = async (url, method, data, contentType='application/json') => {
    
    const result = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
        method: method,
        headers: {
            'Content-type': contentType
        },
        body: data
    })

    if (result.status === 200) {
        return true
    } else
        return false

}