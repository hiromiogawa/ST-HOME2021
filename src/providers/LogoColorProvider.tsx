import { createContext, useState, FC } from "react";
import { Color } from '../styleSetting/Setting';

type LogoFlugType = {
    logoColor: string,
    setLogoColor: Function,
    //children: ReactNode | ReactNode[];
};
export const LogoColorContext = createContext<LogoFlugType>({ logoColor: Color.white, setLogoColor: () => {} });

export const LogoColorProvider: FC = props => {
    const { children } = props;
    
    const [ logoColor, setLogoColor ] = useState(Color.white);

    return (
        <LogoColorContext.Provider value={{ logoColor, setLogoColor }}>
            { children }
        </LogoColorContext.Provider> 
    );
};