const faker = require("faker")
class AdministradorServices {
    constructor() {
        this.administradores = [];
        this.generarDatos()
    }
    generarDatos() {
        const limite = 5;
        const arr = ["M", "F"]
        for (let i = 0; i < limite; i++) {
            var aleatorio = Math.floor(Math.random() * arr.length)
            this.administradores.push({
                codA: faker.datatype.uuid(),
                nombreA: faker.name.firstName(),
                apellidoPA: faker.name.lastName(),
                apellidoMA: faker.name.lastName(),
                celularA: faker.phone.phoneNumber(),
                usuarioA: faker.internet.userName(),
                contraseniaA: faker.internet.password(),
                DniA: Math.floor(Math.random() * (99999999 - 40000000)) + 40000000,
                fechaNaciA: faker.datatype.datetime(),
                sexoA: arr[aleatorio],
                direccionA: faker.address.streetAddress(),
            });
        }
    }

    create(administrador) {
        administrador.codA = faker.datatype.uuid();
        this.administradores.push(administrador)
    }

    update(id, administrador) {
        const AdministradorActualizar = this.findBy(id);
        if (AdministradorActualizar != undefined) {
            AdministradorActualizar.nombreA = administrador.nombreA;
            AdministradorActualizar.apellidoPA = administrador.apellidoPA;
            AdministradorActualizar.apellidoMA = administrador.apellidoMA;
            AdministradorActualizar.celularA = administrador.celularA;
            AdministradorActualizar.usuarioA = administrador.usuarioA;
            AdministradorActualizar.DniA = administrador.usuarioA;
            AdministradorActualizar.fechaNaciA = administrador.fechaNaciA;
            AdministradorActualizar.sexoA = administrador.usuarioA;
            AdministradorActualizar.direccionA = administrador.usuarioA;
        }
    }

    delete(id) {
        this.administradores.splice(this.administradores.indexOf(this.findBy(id)), 1)
    }

    findAll() {
        return this.administradores
    }

    findBy(id) {
        return this.administradores.find(element => element.codA == id)
    }
}

module.exports = AdministradorServices
