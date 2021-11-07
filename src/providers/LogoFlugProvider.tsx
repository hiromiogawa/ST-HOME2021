import { createContext, useState, FC } from "react";

type Props = {
    logoFlug: boolean,
    setLogoFlug: Function,
    //children: ReactNode | ReactNode[];
};
export const LogoFlugContext = createContext<Props>({ logoFlug: false, setLogoFlug: () => {} });

export const LogoFlugProvider: FC = props => {
    const { children } = props;
    
    const [ logoFlug, setLogoFlug ] = useState(false);

    return (
        <LogoFlugContext.Provider value={{ logoFlug, setLogoFlug }}>
            { children }
        </LogoFlugContext.Provider> 
    );
};