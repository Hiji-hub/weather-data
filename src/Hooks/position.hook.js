export const usePosition = () => {
    const request = (url,method = 'GET', body = null, headers = {'X-Auth-Token': 'f1a3809f8e3d41379dbcb8bac066edb8'}) => {
        const fullUrl = 'https://geocode-maps.yandex.ru/1.x/?apikey=a6ef40b3-8153-4db2-bad9-af4f931b44b8&format=json&geocode='+url
        return fetch(fullUrl, { method, body, headers }).then(response => {
            return response.json()
        }).catch(error => {
            return error.text()
        })
    }
    return { request }
}