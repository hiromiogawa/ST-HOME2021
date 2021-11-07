import { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Nav } from './Nav';
import styled from 'styled-components';
import { LogoColorContext } from '../../providers/LogoColorProvider';
import { Color } from '../../styleSetting/Setting';

export const Header: FC = () => {
    
    // ロゴの色プロバイダー取得
    const { logoColor } = useContext(LogoColorContext);

    // ハンバーガメニュー
    const [ menuFlug, setMenuFlug ] = useState<boolean>(false);

    const onClickMenu = () => {
        setMenuFlug(!menuFlug);
        console.log("hoge");
    }
    return (
        <Sheader>
            <h1>
                <Link to="/">
                    <Logo color={logoColor} />
                </Link>
            </h1>
            <Snav>
                <Nav />
            </Snav>
            <SmenuButton onClick={() => onClickMenu}>
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

const Snav = styled.nav`
    position: fixed;
    top: -41px;
    right: -41px;
    overflow: hidden;
    background-color: ${Color.blue01};
    border-radius: 50%;
    z-index: 9998;
    width: 200px;
    height: 200px;
`

const SmenuButton = styled.div`
    position: fixed;
    top: 53.13px;
    right: 47px;
    z-index: 9999;
    width: 57.6px;
    height: 36px;
    cursor: pointer;
    z-index: 9999;

    span {
        position: absolute;
        left: 50%;
        width: 100%;
        height: 3px;
        background-color: ${Color.white};
        transition: transform .35s;
        border-radius: 4px;

        &:nth-of-type(1) {
            top: 0;
            transform: translateX(-50%);
        }

        &:nth-of-type(2) {
            top: 50%;
            transform: translate(-50%, -50%);
        }

        &:nth-of-type(3) {
            top: 100%;
            transform: translate(-50%, -100%);
        }
    }
`