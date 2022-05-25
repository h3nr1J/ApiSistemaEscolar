const faker = require("faker")
class AulaServices {
    constructor() {
        this.aulas = []
        this.generarDatos()
    }
    generarDatos() {
        const limite = 10;
        for (let i = 0; i < limite; i++) {
            this.aulas.push({
                codigoAu: faker.datatype.uuid(),
                numero: faker.datatype.number(),
                piso: faker.datatype.number()
            });
        }
    }
    create(aula) {
        aula.codigoAu = faker.datatype.uuid();
        this.aulas.push(curso)
    }
    update(id, aula) {
        const aulaUpdate = this.findBy(id)
        if (aulaUpdate != undefined) {
            aulaUpdate.numero = aula.numero
            aulaUpdate.piso = aula.piso
        }
    }

    delete(id) {
        this.aulas.splice(this.aulas.indexOf(this.findBy(id)), 1)
    }

    findAll() {
        return this.aulas
    }

    findBy(id) {
        return this.aulas.find(element => element.codigoAu === id) //pepito
    }
}

module.exports = AulaServices
