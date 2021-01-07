class DataHandler {
    getData = (variable, page = 1) => {
        var data1 = [];
        return fetch(`https://gorest.co.in/public-api/${variable}/?page=${page}`)
        .then(response => response.json())
        .then(e => data1=e.data)
        .catch(e => console.log(e))
    }
}
export default (new DataHandler());