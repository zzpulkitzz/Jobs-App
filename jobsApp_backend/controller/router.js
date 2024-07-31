const express=require("express")
let {get_func_jobs,post_func_jobs,delete_func_jobs,get_func_users,post_func_users,edit_func_jobs,post_auth,errHandler}=require("./functions")
let routerJobs=express.Router()
let routerUsers=express.Router()
let routerAuth=express.Router()
routerUsers.use(express.urlencoded({extended:false}))
routerJobs.use(express.urlencoded({extended:false}))
routerAuth.use(express.urlencoded({extended:false}))

routerJobs.use(express.json())
routerUsers.use(express.json())
routerAuth.use(express.json())
routerJobs.route("/jobs").get(get_func_jobs,errHandler).post(post_func_jobs).put(edit_func_jobs).delete(delete_func_jobs)
routerUsers.route("/signup").get(get_func_users).post(post_func_users)
routerAuth.route("/signin").post(post_auth)
module.exports={routerJobs,routerUsers,routerAuth}
