import * as request from "~/utils/request"

export const getListVideo = async(type='for-you',page) => {
    try {
        const res = await request.get('videos',{
            params:{
                type, page
            },
        })
        return res.data
    } catch (error) {
        console.log('get video service error: ',error)
    }
}
