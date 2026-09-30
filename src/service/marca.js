import Marca from '../model/marca.js'

class ServiceMarca {

    Buscar() {
        return Marca.Buscar()
    }

    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar números")
        }
        return Marca.BuscarUm(id)
    }

    Criar(marca) {
        if(!marca) {
            throw new Error("Favor informar o nome da marca")
        }

        Marca.Criar(marca)
    }

    Alterar(id,marca) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados correto")
        }
        Marca.Alterar(id,marca)

    }
Deletar(id) {
    if(!id || isNaN(id)){
        throw new Error("Favor informar o Id correto")
    }
    Marca.Deletar(id)
}
}

export default new ServiceMarca()