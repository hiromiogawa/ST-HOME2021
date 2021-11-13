import { useContext } from 'react';
import { LoadFlugContext } from '../providers/LoadFlugProvider';



export const useLoadFlug = () => {
    const { setLoadFlug } = useContext(LoadFlugContext);
    const changeLoadFlug = (flug: boolean): void  => {
        if (flug) {
            setLoadFlug(true);
        } else {
            setLoadFlug(false)
        }
    };

    return { changeLoadFlug };
};