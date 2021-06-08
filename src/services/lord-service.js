export default class LordService {

    _baseURL = 'http://localhost:8080/api/v1';

    getResource = async (resource, method = "GET", body) => {

        body = body !== null ? body : undefined;
        // const request = await fetch(`${this._baseURL}${resource}`);
        const request = await fetch(`${this._baseURL}${resource}`, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        return await request.json();
    }

    getAllPlanets = async () => {
        return await this.getResource(`/planets`);
    }

    getAllLords = async () => {
        return await this.getResource(`/lords`);
    }

    getAllFreeLords = async () => {
        return await this.getResource(`/lords/free`);
    }
    getAllYongLords = async () => {
        return await this.getResource(`/lords/yong`);
    }

    createLord = async (name, age) => {
        return await this.getResource('/lords/create', "POST", {
            name,
            age
        });
    }

    createPlanet = async (name, lordId) => {
        return await this.getResource('/planets/create', "POST", { name, lordId });
    }

    setPlanetLord = async (id, lordId) => {
        return await this.getResource('/planets', "PUT", { id, lordId });
    }

    deletePlanet = async (id) => {
        return await this.getResource(`/planets/${id}`, "DELETE")
    }

    deleteLord = async (id) => {
        return await this.getResource(`/lords/${id}`, "DELETE")
    }

}