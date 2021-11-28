import { FC, memo } from 'react';
import { Vision } from './Vision';
import { Business } from './Business';
import { PastRecord } from './PastRecord';
import { Company } from './Company';


export const Content: FC = memo(() => {
    return (
        <>
            <Vision />
            <Business />
            <PastRecord />
            <Company />
        </>
    );
});