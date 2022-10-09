import axios from "../axios";

export default vehicleService=()=>{
    postVehicle = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('vehicle', data).then((res) => {
                return resolve(res)
            })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return promise;
    }
}
