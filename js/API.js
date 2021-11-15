const baseURL = 'http://localhost:3000';

class API {
    static fetchApartments = (success, failure) => {
        fetch(`${baseURL}/apartments`)
        .then(res => res.json())
        .then(success)
        .catch(failure)
    }

    static deleteApartment = (id, success, error) => {
        fetch(`${baseURL}/apartments/${id}`, {method: 'DELETE'})
            .then(res => res.status === 200 ? success() : error(res.statusText))
            .catch(error => console.log(error))
    }
}
