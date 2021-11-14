import styled, { css, keyframes } from 'styled-components';
import { Color, Vw, Device } from './Setting';


// コンテンツエリア
export const Scontents = styled.div`
    max-width: ${Device.ct}px;
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;
`

type col2Type = {
    reverce: boolean,
    margin: string,
    cellWidth: string
}

export const Scol2 = styled.div<col2Type>`
    display: flex;
    justify-content: space-around;
    ${props => props.reverce ? css`
        flex-direction: row-reverse;
        ` : css`
    `}

    > * {
        
        &:first-child {
            width: calc(100% - (${props => props.cellWidth + props.margin}));
        }

        &:last-child {
            width: ${props => props.cellWidth};
        }
    }
`

// 共通スタイル
export const Sheading01 = css`
    font-family: 'RalewayBold';
    font-size: 28px;
    color: ${Color.blue01};
    margin-bottom: 40px;

    span {
        position: relative;
        display: inline-block;

        &::after {
            content: "";
            position: absolute;
            top: 50%;
            right: -128px;
            width: 120px;
            height: 1px;
            background-color: ${Color.black02};
            transform: translateY(50%) rotate(180deg);
        }
    }
`

export const Stext01 = css`
    line-height: 2.2;
    font-size: 16px;
` 

// keyframes
export const SfadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const SfadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const SfadeUp = keyframes`
    form {
		transform: translateY(20%);
		opacity: 0;
	}
	to {
		transform: translateY(0);
        opacity: 1;
	}
`

export const Smask = keyframes`
    0% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
    }
`;

export const SheadingFadeIn = keyframes`
    from {
        color: transparent;
    }
    to {
        color: ${Color.blue01};
    }
`

export const SheadingAfter = keyframes`
    from {
        width: 0;
    }
    to {
        width: 120px;
    }
`

