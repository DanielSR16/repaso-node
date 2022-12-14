const { Router } = require("express");
const controllerTarea =  require("../controller/task_controller")
const router = Router();


router.get('/info',controllerTarea.get_task);

router.get('/all',controllerTarea.get_all_task);

router.post('/add',controllerTarea.add_task);

router.put('/edit',controllerTarea.edit_task);

router.delete('/delete',controllerTarea.delete_task);



module.exports = router;