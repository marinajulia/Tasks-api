import { Router, Request, Response } from 'express'
import { getTasks, saveTask, getTask, updateTask, finishedTask, deleteTask} from './controller/TasksController'
const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello world' })
})

routes.get('/tasks', getTasks)
routes.get('/tasks/:id', getTask)
routes.post('/tasks', saveTask)
routes.put('/tasks/:id', updateTask)
routes.delete('/tasks/:id', deleteTask)
routes.patch('/tasks/:id', finishedTask)//patch é mais indicado quando for alterar apenas um registro no banco

//com o expor default, no import eu não vou precisar usar {}
export default routes