import { ThemeProvider } from "styled-components";
import { color } from "./color";
import { font } from "./font";

const theme={
    color,
    font
}

export const Theme = ({children}) => {
    return ( 
        <ThemeProvider theme={theme}>
            {children}

        </ThemeProvider>
     );
}
 
