import axios from "../axios";

export default loginService=()=>{
    postLogin = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('login', data).then((res) => {
                return resolve(res)
            })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return promise;
    }
}

