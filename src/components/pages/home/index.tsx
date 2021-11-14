import { FC, useState, memo } from 'react';
import { MainVisual } from './MainVisual';
import { Content } from './content/Content';


export const Home: FC = memo(() => {

    const [ currentSection, setCurrentSection ] = useState<string>('mainvisual');

    return (
        <article>
            {
            (() => {
                switch (currentSection) {
                    case 'mainvisual':
                        return <MainVisual setCurrentSection={setCurrentSection}/>
                    case 'contents':
                        return <Content />
                };
            })()
            }
        </article>
    );
});
