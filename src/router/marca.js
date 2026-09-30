import express from 'express'
import ControllerMarca from '../controller/marca.js'

const router = express.Router()

router.get("/buscar", ControllerMarca.Buscar)
router.get("buscarUm/:id", ControllerMarca.BuscarUm)
router.post("/criar", ControllerMarca.Criar)
router.put("/alterar/:id", ControllerMarca.Alterar)
router.delete("/deletar/:id", ControllerMarca.Deletar)

export default router