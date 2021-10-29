import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'
const router = Router()

/* GET users listing. */

router.get('/', todosCtrl.index)
router.get('/new', todosCtrl.new)
router.get('/:id', todosCtrl.show)
router.post('/', todosCtrl.create)
router.delete('/:id', todosCtrl.delete)

export {
  router
}
