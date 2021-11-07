import { FC } from 'react';
import { useLogoColor } from '../../hooks/useLogoColor';
import styled, { css, keyframes } from 'styled-components';
import { Color, Vw, Device } from '../../styleSetting/Setting';


export const Home: FC = () => {

    // カスタムフックロゴの色変更関数呼び出し
    const { changeLogoColor } = useLogoColor();

    return (
        <article>
            <SmainVisual>
                <img src="/images/index/mv_ph01_sp.jpg" 
                srcSet="
                    /images/index/mv_ph01_sp.jpg 767w,
                    /images/index/mv_ph01_pc.jpg 1920w"
                alt="" />
                <p><img src="/images/index/mv_tx01.svg" alt="Future Living 夢見た未来を貴方の暮らしに" /></p>
                <div><img src="/images/index/mv_scroll01.svg" alt="scroll" /></div>
            </SmainVisual>
        </article>
    );
};

const SmainVisual = styled.section`
    position: relative;
    width: calc(100% - 40px);
    height: calc(100vh - 40px);
    overflow: hidden;
    margin: 20px;
    z-index: 0;

    &::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.4);
        position: absolute;
        bottom: 50%;
        right: 50%;
        transform: translate(50%,50%);
        z-index: 0;
    }

    > img {
        position: absolute;
        bottom: 50%;
        right: 50%;
        transform: translate(50%,50%);
        width: 100%;
    }

    p {
        position: absolute;
        bottom: 50%;
        right: ${Vw(190, 1920)};
        transform: translateY(50%);
        z-index: 2;
        height: ${Vw(348, 1920)};
    }

    div {
        position: absolute;
        bottom: -20px;
        right: 60px;
        width: ${Vw(17, Device.pc)};
    }
`
