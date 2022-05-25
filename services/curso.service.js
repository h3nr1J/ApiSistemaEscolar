const faker = require("faker")
class CursoServices {
    constructor() {
        this.cursos = []
        this.generarDatos()
    }
    generarDatos() {
        const limite = 10;
        for (let i = 0; i < limite; i++) {
            this.cursos.push({
                codigoC: faker.datatype.uuid(),
                nombre: faker.name.jobTitle(),
                descripcion: faker.lorem.sentences(),
                imagen: faker.image.abstract()
            });
        }
    }
    create(curso) {
        curso.codigoC = faker.datatype.uuid();
        this.cursos.push(curso)
    }
    update(id, curso) {
        const cursoUpdate = this.findBy(id)
        if(cursoUpdate != undefined){
            cursoUpdate.nombre = curso.nombre
            cursoUpdate.descripcion = curso.descripcion
            cursoUpdate.imagen = curso.imagen
        }
    }

    delete(id) {
        this.cursos.splice(this.cursos.indexOf(this.findBy(id)), 1)
    }

    findAll() {
        return this.cursos
    }

    findBy(id) {
        return this.cursos.find(element => element.codigoC == id) //pepito
    }
}

module.exports = CursoServices
