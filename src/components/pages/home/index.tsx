import { FC, useState } from 'react';
import { useLogoColor } from '../../../hooks/useLogoColor';
import { MainVisual } from './MainVisual';
import { Content } from './Content';


export const Home: FC = () => {

    // カスタムフックロゴの色変更関数呼び出し
    const { changeLogoColor } = useLogoColor();

    const [ currentSection, setCurrentSection ] = useState<string>('mainvisual');

    console.log(currentSection);

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
};
