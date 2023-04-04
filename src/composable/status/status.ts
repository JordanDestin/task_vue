import axios from "axios";
import { ref } from "vue";
import { Status } from "../../interfaces/status/status.interface";

export default function useStatus() {

    const listStatus = ref<Status[]>([]);

    const getAllStatus = () => {
        return window.axios   
            .get("status")
            .then((response)=>{
                console.log(response,'liststatus')
                listStatus.value = response.data.listStatus
            })
            .catch((err) => console.log(err))
    }

    return {
        getAllStatus,
        listStatus
    }
}