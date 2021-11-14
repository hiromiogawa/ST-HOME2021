import { useState, useEffect, memo } from 'react';
import { useMvFlug } from '../../../hooks/useMvFlug';
import { useLoadFlug } from '../../../hooks/useLoadFlug';
import styled, { css } from 'styled-components';
import { Color, Vw, Device } from '../../../styleSetting/Setting';
import { CurrentType, WheelEventType } from '../../../types/Home';
import { Smask, SfadeOut } from '../../../styleSetting/CommonStyle';
import { flugType, speedType } from '../../../types/Common';

export const MainVisual = memo((props:CurrentType ) => {
    const { setCurrentSection } = props;
    const { changeMvFlug } = useMvFlug();
    const { changeLoadFlug } = useLoadFlug();
    const [ scrollFlug, setScrollFlug ] = useState<boolean>(false);
    const speed: number = 2000;

    const handleWheel = (e: WheelEventType) => {
        if (e.deltaY > 10) {
            setScrollFlug(true);
            changeLoadFlug(false);
            setTimeout(function() {
                setCurrentSection('contents');
                changeMvFlug(false);
                changeLoadFlug(true);
            }, speed);
        }
    };


    useEffect(() => {
        changeMvFlug(true);
    }, [])

    return (
        <>
        <SmainVisual flug = { scrollFlug } speed = { speed }>
            <img src="/images/index/mv_ph01_sp.jpg" 
            srcSet="
                /images/index/mv_ph01_sp.jpg 767w,
                /images/index/mv_ph01_pc.jpg 1920w"
            alt="" />
            <p><img src="/images/index/mv_tx01.svg" alt="Future Living 夢見た未来を貴方の暮らしに" /></p>
            <Sscroll><img src="/images/index/mv_scroll01.svg" alt="scroll" /></Sscroll>
        </SmainVisual>
        <SmaskAnimate flug = { scrollFlug } speed = { speed } onWheel = {(e) => handleWheel(e)} />
        </>
    );
});

type speedFlugType = flugType & speedType;


const SmainVisual = styled.section<speedFlugType>`
    position: fixed;
    width: calc(100% - 40px);
    height:  calc(100vh - 40px);
    overflow: hidden;
    z-index: 0;
    margin: 20px;
    top: 0;
    left: 0;
    z-index: 1;
    ${props => props.flug ? css`
        animation: ${SfadeOut} ${ props.speed / 3 }ms linear ${ props.speed / 3 }ms forwards;
        ` : css`
    `}

    &::before {
        content: "";
        display: block;
        width: calc(100% + 40px);;
        height: calc(100vh + 40px);;
        background-color: ${Color.white};
        position: absolute;
        bottom: 50%;
        right: 50%;
        transform: translate(50%,50%);
        z-index: 1;
    }

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.4);
        position: absolute;
        bottom: 50%;
        right: 50%;
        transform: translate(50%,50%);
        z-index: 1;
    }

    > img {
        position: absolute;
        bottom: 50%;
        right: 50%;
        transform: translate(50%,50%);
        width: 100%;
        z-index: 1;
    }

    p {
        position: absolute;
        bottom: 50%;
        right: ${Vw(190, 1920)};
        transform: translateY(50%);
        z-index: 2;
        height: ${Vw(348, 1920)};
    }

`

const Sscroll = styled.div`
    position: absolute;
    bottom: -20px;
    right: 60px;
    width: ${Vw(17, Device.pc)};
`

const SmaskAnimate = styled.div<speedFlugType>`
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 999;
    overflow: hidden;

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: ${Color.gray};
        z-index: 998;
        transform: translateX(-100%);
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
`