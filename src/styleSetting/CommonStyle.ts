import styled, { keyframes } from 'styled-components';
import { Color, Vw, Device } from './Setting';

export const Scontents = styled.div`
    max-width: ${Device.ct}px;
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;
`
export const Sheading02 = styled.h2`
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

export const Stext = styled.p`
    line-height: 2.2;
    font-size: 16px;
` 

// keyframes
export const SFadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const SMask = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`;

