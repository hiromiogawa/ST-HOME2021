import { createContext, useState, FC } from "react";

type MvFlugType = {
    mvFlug: boolean,
    setMvFlug: Function,
};
export const MvFlugContext = createContext<MvFlugType>({ mvFlug: false, setMvFlug: () => {} });

export const MvFlugProvider: FC = props => {
    const { children } = props;
    
    const [ mvFlug, setMvFlug ] = useState(false);

    return (
        <MvFlugContext.Provider value={{ mvFlug, setMvFlug }}>
            { children }
        </MvFlugContext.Provider> 
    );
};