import { FC, memo } from 'react';
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Color } from '../../../../styleSetting/Setting';
import { Scontents, Sheading01, Stext01 } from '../../../../styleSetting/CommonStyle';
import { SheadingFadeIn, SheadingAfter, SfadeUp } from '../../../../styleSetting/CommonStyle';
import { flugType } from '../../../../types/Common';

export const Vision: FC = memo(() => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });
    return (
        <Svision ref={ref} flug = {inView}>
            <Scontents>
                <h2><span>VISION</span></h2>
                <p><strong>生活スタイルの段階を上げる<br />
                昔夢見た空想の世界を現実に</strong></p>
                <p>子供の頃自動車が空を走ることを想像したことはありませんか？<br />
                バックトゥーザ・フューチャーのような未来が来ることを。<br />
                弊社はそんな未来を現実とし、建築を通じて生活スタイルを変えることにより、<br />
                より豊かな日常へとレベルアップすることを目的に活動します。</p>
            </Scontents>
        </Svision>
    );
});

const Svision = styled.section<flugType>`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        ${ Sheading01 }
        color: transparent;
        ${props => props.flug ? css`
            animation: ${SheadingFadeIn} 500ms linear 500ms forwards;
        ` : css`
            
        `}

        span {
            &::after {
                width: 0;
                ${props => props.flug ? css`
                    animation: ${SheadingAfter} 500ms linear 0ms forwards;
                ` : css`
                `}
            }
        }
    }

    p {
        transform: translateY(20%);
		opacity: 0;
        ${props => props.flug ? css`
            animation: ${SfadeUp} 500ms ease-in 1000ms forwards;
        ` : css`
        `}

        &:nth-of-type(1) {
            margin-bottom: 32px;
            line-height: 2;
            
            strong {
                color: ${Color.blue02};
                font-size: 24px;
                font-family: "游明朝","Yu Mincho",YuMincho,"ヒラギノ明朝 ProN W6","HiraMinProN-W6","HG明朝E","ＭＳ Ｐ明朝","MS PMincho","MS 明朝",serif;
                font-weight: 400;
            }
        }

        &:nth-of-type(2) {
            ${ Stext01 }
        }
    }
`