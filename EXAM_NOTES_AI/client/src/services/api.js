import axios from 'axios';

import {serverURL} from '../App';

export const getCurrentUser = async () => {
    try{
        const result = await axios.get(serverURL + '/api/user/currentuser', {withCredentials: true});
        return result.data;
        console.log("Current user data:", result.data);
    }
    catch(error) {
        console.error("Error fetching current user:", error);
    }
}