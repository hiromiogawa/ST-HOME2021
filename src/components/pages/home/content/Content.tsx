import { FC, memo } from 'react';
import { Vision } from './Vision';
import { Business } from './business';

export const Content: FC = memo(() => {
    return (
        <>
            <Vision />
            <Business />
        </>
    );
});