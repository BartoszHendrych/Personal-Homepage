import { ErrorBox } from "./Error"
import { Loading } from "./Loading"
import { Success } from "./Success"


export const Content = ({ projects }) => {
    if (projects === "error") {
        return <ErrorBox />
    } else
        if (projects === "loading") {
            return <Loading />
        } else {
            return <Success projects={projects} />
        }
};