import { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Nav } from './Nav';
import styled, { css, keyframes } from 'styled-components';
import { LogoColorContext } from '../../providers/LogoColorProvider';
import { Color } from '../../styleSetting/Setting';

export const Header: FC = () => {
    
    // ロゴの色プロバイダー取得
    const { logoColor } = useContext(LogoColorContext);

    // ハンバーガメニュー
    const [ menuFlug, setMenuFlug ] = useState<boolean>(false);

    const onClickMenu = () => {
        setMenuFlug(!menuFlug);
    }

    return (
        <Sheader>
            <h1>
                <Link to="/">
                    <Logo color={ menuFlug? Color.white: logoColor} />
                </Link>
            </h1>
            <Snav flug={ menuFlug }>
                <Nav />
            </Snav>
            <SmenuButton flug={ menuFlug } onClick={() => onClickMenu()}>
                <span></span><span></span><span></span>
            </SmenuButton>
        </Sheader>
    );
};

const Sheader = styled.header`
    h1 {
        position: fixed;
        top: 52px;
        left: 52px;
        height: 46.25px;
        width: 154.48px;
        z-index: 9999;

        a {
            display: block;
            height: 100%;
            width: 100%;
        }
    }
`

type flugType = {
    flug: boolean,
};

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Snav = styled.nav<flugType>`
    position: fixed;
    top: ${(props) => props.flug? "-50vh" : "-41px"};
    right: ${(props) => props.flug? "-50vw" : "-41px"};
    overflow: hidden;
    background-color: ${Color.blue01};
    border-radius: ${(props) => props.flug? "0" : "50%"};
    z-index: 9997;
    width: ${(props) => props.flug? "200vw" : "200px"};
    height: ${(props) => props.flug? "200vh" : "200px"};
    transition: width 1s, height 1s, border-radius 1s, top ${(props) => props.flug? ".5s" : ".9s"}, right ${(props) => props.flug? ".5s" : ".9s"};

    ul {
        position: fixed;
        visibility: ${(props) => props.flug? "visible" : "hidden"};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        opacity: 0;
        ${props => props.flug ? css`
        animation: ${fadeIn} .35s linear 1s forwards;
        ` : css`
        `}

        li {
            padding: 2.5vh;
            font-family: 'RalewayMedium';
            text-align: center;

            a {
                color: ${Color.white};
                font-size: 32px;
                text-decoration: none;
            }
        }
    }
`

const SmenuButton = styled.div<flugType>`
    position: fixed;
    top: 53.13px;
    right: 47px;
    z-index: 9999;
    width: 57.6px;
    height: 36px;
    cursor: pointer;
    z-index: 9998;

    span {
        position: absolute;
        left: 50%;
        width: 100%;
        height: 3px;
        background-color: ${Color.white};
        transition: transform .35s;
        border-radius: 4px;

        &:nth-of-type(1) {
            top: ${(props) => props.flug? "50%" : "0"};
            transform: ${(props) => props.flug? "translate(-50%,-50%) rotate(45deg)" : "translateX(-50%)"};
        }

        &:nth-of-type(2) {
            top: 50%;
            transform: translate(-50%, -50%);
            transition: opacity .35s;
            opacity: ${(props) => props.flug? "0" : "1"};
        }

        &:nth-of-type(3) {
            top: ${(props) => props.flug? "50%" : "100%"};
            transform: ${(props) => props.flug?"translate(-50%,-50%) rotate(-45deg)" : "translate(-50%, -100%)"};
        }
    }
`