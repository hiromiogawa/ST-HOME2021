import { useContext } from 'react';
import { LogoColorContext } from '../providers/LogoColorProvider';
import { Color } from '../styleSetting/Setting';



export const useLogoColor = () => {
    const { setLogoColor } = useContext(LogoColorContext);
    const changeLogoColor = (color: string): void  => {
        switch(color) {
            case 'black':
                setLogoColor(Color.black01);
                break;
            case 'white':
                setLogoColor(Color.white)
                break;
        };
    };

    return { changeLogoColor };
};