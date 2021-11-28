import { FC, memo } from 'react';
import styled, { css } from 'styled-components';
import { Col2 } from '../Col2';
import { Scontents } from '../../../../styleSetting/CommonStyle';
import { Color } from '../../../../styleSetting/Setting';

export const Business: FC = memo(() => {
    return (
        <Sbusiness>
            <Sbg>
                <h2>Business</h2>
            </Sbg>
            <Scontents>
                <Col2
                    reverse = { true }
                    img = "/images/index/index_ph01.jpg"
                    heading = "IoT"
                    text = "生活レベルを1つ上げるIOT機材を利用した建築プランの提案"
                    link = "/iot"
                />
                <Col2
                    reverse = { false }
                    img = "/images/index/index_ph02.jpg"
                    heading = "New Construction"
                    text = "ライフサイクルコストと家族の一生を考える。多種多様なプランを建築家と計画実行すること"
                    link = "/newconstruction"
                />
                <Col2
                    reverse = { true }
                    img = "/images/index/index_ph03.jpg"
                    heading = "Remodeling"
                    text = "できることできないことの判断。言葉にできない内容を図面上に補助金やポイント制度のご相談も"
                    link = "/Remodeling"
                />
            </Scontents>
        </Sbusiness>
    );
});

const Sbusiness = styled.section`
    position: relative;
    padding-top: 48px;
`

const Sbg = styled.div`
    width: calc(100% - 130px);
    position: absolute;
    height: calc(100% - 64px);
    top: 0;
    right: 0;
    background-color: ${Color.gray};
    z-index: 0;

    h2 {
        position: absolute;
        transform: translateX(-49%) rotate(90deg);
        top: 390px;
        left: 0;
        font-size: 120px;
        color: rgba(17,25,28,.2);
        font-family: "NotoSerifJPMedium";
        letter-spacing: .3em;
        text-align: left;
    }
`