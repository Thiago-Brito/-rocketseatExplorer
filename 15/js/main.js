import {Router} from './router.js'

const route = new Router()

route.add('/',"../15/pages/home.html")
route.add('/universo',"../15/pages/universo.html")
route.add('/exploracao',"../15/pages/exploracao.html")
route.add(404,"../15/pages/404.html")





route.handle()

window.onpopstate = () => route.handle()
window.route = () => route.route()
