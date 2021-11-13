import { useContext } from 'react';
import { MvFlugContext } from '../providers/MvFlugProvider';



export const useMvFlug = () => {
    const { setMvFlug } = useContext(MvFlugContext);
    const changeMvFlug = (flug: boolean): void  => {
        if (flug) {
            setMvFlug(true);
        } else {
            setMvFlug(false)
        }
    };

    return { changeMvFlug };
};