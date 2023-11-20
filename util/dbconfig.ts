import { connect } from "mongoose";

const Url: string = "mongodb://127.0.0.1/127017/crudcollab"


export const dbconfig = async () => {
    try {

        await connect(Url).then((res) => {
            console.log("data base is connected")
        })
    } catch (error) {
        console.log(error)
    }
}