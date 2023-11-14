import axios from "axios";
import { githubApi } from "../data";

export const getRepositories = async () => {
    const response = await axios.get(githubApi);
    if(!response.ok) new Error(response.statusText);

    return await response.data;
};