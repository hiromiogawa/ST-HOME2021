import { FC, memo, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Scontents, Sheading01, SheadingFadeIn, SheadingAfter, SfadeIn } from '../../../../styleSetting/CommonStyle';
import { Color, Vw, Device } from '../../../../styleSetting/Setting';
import { flugType } from '../../../../types/Common';

type recordListDataType = {
    id: number,
    acf: {
        img1: string,
    }
}

export const PastRecord: FC = memo(() => {
    const [ recordData, setRecordData ] = useState<recordListDataType[]>([]);

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    useEffect(() => {
        axios.get('http://wp.hiromi-ogawa.com/wp-json/wp/v2/posts?_embed&per_page=8&page=1').then((res) => {
            setRecordData(res.data);
        })
    }, []);

    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 30000,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.5,
            }
            }
        ]
    };


    const list = recordData.map((value,i) => (
        <li className={'slide'  + i} key={i}>
            <article>
                <Link to={`/record/detail/${value.id}`}>
                    <img src={value.acf.img1} alt="" />
                </Link>
            </article>
        </li>
    ));

    return (
        <SpastRecord ref={ref} flug = {inView}>
            <h2>Past<br />
            Record</h2>
            <Scontents>
                <h3><span>Past-Record</span></h3>

                <Swrap flug = {inView}>
                    <ul>
                        <Slider {...settings}>
                            { list }
                        </Slider>
                    </ul>
                </Swrap>
                
            </Scontents>
        </SpastRecord>
    );
});

const SpastRecord = styled.section<flugType>`
    position: relative;
    overflow: hidden;
    margin-top: 140px;
    padding-bottom: 40px;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: calc(70% - 40px);
        bottom: 0;
        left: 0;
        background-color: ${ Color.gray };
    }

    h2 {
        position: absolute;
        left: 77px;
        top: 18%;
        font-size: 120px;
        color: rgba(17,25,28,.2);
        font-family: "NotoSerifJPMedium";
        letter-spacing: .3em;
        text-align: left;
    }

    h3 {
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

    .slick-slide {
        padding: 0 ${Vw(20, Device.pc)};
        article {
            box-shadow: 0 0 15px -5px #777;
        }
    }

    .slide {
        
        &2,
        &6 {
            padding-top: ${Vw(64, Device.pc)};
        }

        &3,
        &7 {
            padding-top: ${Vw(16, Device.pc)};
        }

        &4,
        &8 {
            padding-top: ${Vw(40, Device.pc)};
        }
    }
`

const Swrap = styled.div<flugType>`
    margin-right: ${Vw(-500, Device.pc)};
    opacity: 0;
    ${props => props.flug ? css`
        animation: ${SfadeIn} 500ms ease-in 1000ms forwards;
    ` : css`
    `}
`