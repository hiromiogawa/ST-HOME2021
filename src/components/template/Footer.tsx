import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Scontents } from '../../styleSetting/CommonStyle';
import { Nav } from './Nav';
import { Color } from '../../styleSetting/Setting';

export const Footer: FC = memo(() => {

    return (
        <>
            <Scontact>
                <Link to="/contact">CONTACT</Link>
            </Scontact>
            <Sfooter>
                <Scontents>
                    <Swrap>
                        <div>
                            <Sinner>
                                <h1>
                                    <Link to="/">
                                        <Logo color={Color.white} />
                                    </Link>
                                </h1>
                                <div>
                                <p className="address">〒424-0067<br/>
                                静岡県静岡市清水区鳥坂1225-2</p>
                                <p className="tel">TEL&amp;FAX：054-388-9644</p>
                                </div>
                            </Sinner>
                        </div>
                        <div>
                            <nav>
                                <Nav/>
                            </nav>
                        </div>
                    </Swrap>
                </Scontents> 
            </Sfooter>
        </>
    );
});

const Scontact = styled.section`
    margin-top: 140px;
    
    a {
        display: block;
        background-color: ${Color.gray};
        padding: 80px 0;
        text-align: center;
        font-size: 24px;
        font-family: "RalewayBold";
        line-height: 1;
        text-decoration: none;
    }
`

const Sfooter = styled.footer`
    background-color: ${Color.black02};
    padding: 48px 0;
`

const Swrap = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    > div {
        &:first-of-type {
            width: 440px;
        }
        &:last-of-type {
            width: calc(100% - 501.75px);
            padding: 0 72px;
            border-left: solid 1px ${Color.white};
            border-right: solid 1px ${Color.white};

            ul {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                li {
                    position: relative;
                    width: 50%;
                    padding-left: 1em;

                    &:not(:nth-of-type(4n)) {
                        margin-bottom: 1em;
                    }

                    &::before {
                        content: "";
                        position: absolute;
                        top: 0.5em;
                        left: 0;
                        width: 4px;
                        height: 1px;
                        background-color: ${Color.white};
                    }

                    a {
                        color: ${Color.white};
                        text-decoration: none;
                    }
                }
            }
        }
    }
`

const Sinner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: ${Color.white};

    h1 {
        height: 46.25px;
        width: 160px;
    }
`