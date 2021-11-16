import { FC, memo } from 'react';
import { Vision } from './Vision';
import { Business } from './Business';
import { PastRecord } from './PastRecord';


export const Content: FC = memo(() => {
    return (
        <>
            <Vision />
            <Business />
            <PastRecord />
        </>
    );
});