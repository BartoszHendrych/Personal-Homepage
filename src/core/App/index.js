import { useSelector } from "react-redux"
import { selectIsDarkTheme } from "../../common/themeSlice"
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";
import { PersonalHomepage } from "../../features/PersonalHomepage";
import { GlobalStyle } from "./GlobalStyle";


const App = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
            <GlobalStyle />
            <PersonalHomepage />
        </ThemeProvider>
    );
}

export default App;