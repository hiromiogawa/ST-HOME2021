import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Color } from '../../../styleSetting/Setting';
import { Sheading01, SheadingFadeIn, SheadingAfter, SfadeUp, Smask, SfadeIn } from '../../../styleSetting/CommonStyle';
import { flugType, reverceType, speedType } from '../../../types/Common';

type col2Type = {
    reverse: boolean,
    img: string,
    heading: string,
    text: string
}

export const Col2: FC<col2Type> = memo((props) => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const { reverse, img, heading, text } = props;

    return (
        <Scol2 ref={ref} flug = {inView} reverce = {reverse} speed = { 1500 }>
            <Link to="/">
                <div><img src={img} alt="" /></div>
                <div>
                    <h3><span>{ heading }</span></h3>
                    <p>{ text }</p>
                </div>
            </Link>
        </Scol2>
    );
});

type reverceFlugType = reverceType & flugType & speedType;

const Scol2 = styled.div<reverceFlugType>`
    &:not(:first-child) {
        margin-top: 64px;
    }

    a {
        display: flex;
        justify-content: space-between;
        color: ${ Color.black01 };
        text-decoration: none;
        ${props => props.reverce ? css`
            flex-direction: row-reverse;
            ` : css`
        `}

        > * {
            
            &:first-child {
                position: relative;
                width: calc(100% - 640px);
                overflow: hidden;

                &::before {
                    position: absolute;
                    content: "";
                    width: 100%;
                    height: 100%;
                    background-color: ${Color.white};
                    transform: translateX(-100%);
                    z-index: 998;
                    ${props => props.flug ? css`
                        animation: ${Smask} ${ props.speed / 3 * 2 }ms linear 0ms forwards;
                        ` : css`
                    `}
                    }
                    &::after {
                        position: absolute;
                        content: "";
                        width: 100%;
                        height: 100%;
                        left: 0;
                        top: 0;
                        background-color: ${Color.blue01};
                        z-index: 999;
                        transform: translateX(-100%);
                        ${props => props.flug ? css`
                            animation: ${Smask} ${ props.speed / 3 * 2 }ms linear ${ props.speed / 3 }ms forwards;
                            ` : css`
                        `}
                    }
                }

            &:last-child {
                width: 600px;
            }

            img {
                width: 100%;
                opacity: 0;
                ${props => props.flug ? css`
                    animation: ${SfadeIn} ${ props.speed / 3 }ms linear ${ props.speed / 3 }ms forwards;
                    ` : css`
                `}
            }

            h3 {
                ${ Sheading01 }
                color: transparent;
                ${props => props.flug ? css`
                    animation: ${SheadingFadeIn} 500ms linear 2000ms forwards;
                ` : css`
                    
                `}

                span {
                    &::after {
                        width: 0;
                        ${props => props.flug ? css`
                            animation: ${SheadingAfter} 500ms linear 1500ms forwards;
                        ` : css`
                        `}
                    }
                }
            }

            p {
                transform: translateY(20%);
                opacity: 0;
                ${props => props.flug ? css`
                    animation: ${SfadeUp} 500ms ease-in 2000ms forwards;
                ` : css`
                `}
            }
        }
    }
`