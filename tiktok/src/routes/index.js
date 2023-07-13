import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Upload from "~/pages/Upload"


const publicRoutes = [
    {path: '/', compnent: Home},
    {path: '/following', compnent: Following},
    {path: '/upload', compnent: Upload ,layout: null}
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}