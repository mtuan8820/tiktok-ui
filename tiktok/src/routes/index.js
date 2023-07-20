import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Upload from "~/pages/Upload"
import Profile from "~/pages/Profile"

import config from "~/configs"

const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.following, component: Following},
    {path: config.routes.upload, component: Upload ,layout: null},
    {path: config.routes.profile, component: Profile}
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}