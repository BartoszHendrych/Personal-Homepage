import axios from "axios";

const urlBaseGitHub = "https://github.com/BartoszHendrych?tab=repositories";

export const gitHubRespositories = () =>
    axios.get(urlBaseGitHub)
        .then(response => response.data);
