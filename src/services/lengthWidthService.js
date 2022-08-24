import axios from "axios"

export const getLengthWidth = async(imgUrl, coOrdinates) => {
    try {
        const res = await axios.post("http://127.0.0.1:5000/dimension", {imgURL: imgUrl, coOrds: coOrdinates})
        console.log(res)
        return res
    } catch(err) {
        console.log(err)
    }
}