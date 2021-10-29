
import { Router } from "express"
import * as mediumsCtrl from "../controllers/mediums.js"
import * as mediumsDb from "../data/mediums-db.js"
const router = Router()


router.get("/", mediumsCtrl.index);
router.get("/new", mediumsCtrl.newmedium);
router.get("/:id", mediumsCtrl.show);

router.post("/", mediumsCtrl.create);
router.delete("/:id", mediumsCtrl.deletemedium);


export {
  router
}