import styled from 'styled-components';

type LogoColorType = {
    color: string,
};

export const Logo = (props: LogoColorType) => {
    const { color } = props;

    const SiteLogo = styled.svg`
    height: 100%;
    width: 100%;

    .cls-1 {
        fill: none;
        stroke: ${color};
        stroke-width: 1.5px;
        stroke-miterlimit: 10;
    }

    .cls-2 {
        fill: ${color};
    }

    .cls-3 {
        fill: none;
        stroke: ${color};
        stroke-width: 2.62px;
        stroke-miterlimit: 10;
    }
`

    return (
        <SiteLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 157 47"><defs></defs><g><g><path className="cls-1" d="M153.45,45.12H108.83l-5.9-5.94H79.74l-77.41-.1H153.45"></path><ellipse className="cls-2" cx="153.87" cy="45.12" rx="1.45" ry="1.51"></ellipse><g><path className="cls-3" d="M16,20.83H12.09c-5,0-8.46-4.29-7.72-9.58s5.4-9.57,10.41-9.57h9"></path><path className="cls-3" d="M11.83,12.26h3.92c5,0,8.46,4.29,7.72,9.57s-5.4,9.58-10.41,9.58H.24"></path></g><g><path className="cls-2" d="M131.64,30.05l1.84-13.19h19.94l.36-2.57H133.84l1.59-11.35h21l.36-2.57H131.89c-5.41,10-13.64,25.23-15.54,28.65h0C115.78,26.8,112,11.24,109,.37h-3.51l-1.87,13.39a11.92,11.92,0,0,0-7.31-9.85L95.24,6.15c4.46,2,6.38,6.74,5.7,11.6-1,7-6.16,12.56-13.81,12.56-7.88,0-11.3-6.27-10.39-12.8A14.35,14.35,0,0,1,85.7,6L85.18,3.9a17.33,17.33,0,0,0-10.07,9.8L77,.37H74.41L72.52,13.89H52.68L54.57.37H23.71L23.35,3H36.07L31.93,32.61h2.85L38.92,3H51.64L47.5,32.61h2.56L52.32,16.5H72.15L69.9,32.61h2.56L74,21.73c.71,6.34,5.39,10.88,12.81,10.88a16.63,16.63,0,0,0,15.74-10.83L101,32.61h2.38l1.93-13.77c.76-5.42,1.67-12.54,1.9-16.2h0c1,4.55,5.21,21.66,7.33,30h2.1C122.43,22.26,130.31,7.82,132.6,3l-4.12,29.58h24.26l.82-2.56Z"></path><path className="cls-2" d="M92.5.44H90L87.47,18.33H90Z"></path></g><ellipse className="cls-2" cx="153.87" cy="39.07" rx="1.45" ry="1.51"></ellipse><rect className="cls-2" x="0.24" y="37.81" width="4.03" height="2.6"></rect></g></g></SiteLogo>
    );
};