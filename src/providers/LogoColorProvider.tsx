import { createContext, useState, FC } from "react";

export const LogoColorContext = createContext();

export const LogoColorProvider: FC = props => {
    const { children } = props;
    
    const [ logoColor, setLogoColor ] = useState(false);

    return (
        <LogoColorContext.Provider value={{ logoColor, setLogoColor }}>
            { children }
        </LogoColorContext.Provider> 
    );
};