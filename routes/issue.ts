import { Router } from "express";
import validarJWT from "../middlewares/validarJWT";
import { recolectarErrores } from "../middlewares/recolectarErrores";
import { check } from "express-validator";
import { postNewIssue } from "../controllers/issue";
import { isAdmin } from "../middlewares/validarRol";

const router = Router();

router.post("/",
    [
        validarJWT,
        isAdmin,
        check("title", "El título es obligatorio").not().isEmpty(),
        check("description", "La descripcion es obligatoria").not().isEmpty(),
        check("priority", "La prioridad es obligatoria").not().isEmpty(),
        recolectarErrores
    ],
    postNewIssue
)

export default router