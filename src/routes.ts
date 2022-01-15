import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello world' })
})
//com o expor default, no import eu não vou precisar usar {}
export default routes