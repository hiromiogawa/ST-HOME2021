import { FC } from 'react';
import { useLogoColor } from '../../hooks/useLogoColor';


export const Home: FC = () => {

    // カスタムフックロゴの色変更関数呼び出し
    const { changeLogoColor } = useLogoColor();

    return (
        <article>
            <button onClick={() => changeLogoColor("black")}>テスト</button>
            <h1>tyas</h1>
        </article>
    );
};