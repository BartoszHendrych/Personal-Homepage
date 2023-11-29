import { ErrorBox } from "./Error"
import { Loading } from "./Loading"
import { Success } from "./Success"


export const Content = ({ projects }) => {
    switch (projects) {
        case "error":
            return <ErrorBox />;

        case "loading":
            return <Loading />;
            
        default:
            return <Success projects={projects} />;
    }
};