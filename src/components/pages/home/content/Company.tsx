import { FC, memo } from 'react';
import styled, { css } from 'styled-components';
import { Col2 } from '../Col2';
import { Scontents } from '../../../../styleSetting/CommonStyle';
import { Color } from '../../../../styleSetting/Setting';

export const Company: FC = memo(() => {
    return (
        <SCompany>
            <Scontents>
                <Col2
                    reverse = { false }
                    img = "/images/index/index_ph04.jpg"
                    heading = "Company Profile"
                    text = "お客様が必要な物・これから必要になる物を建築の専門家である視点からアドバイスをして、無駄のない提案を行えるよう日々努力を怠らず、個人として会社として成長していきます。"
                    link = "/company"
                />
            </Scontents>
        </SCompany>
    );
});

const SCompany = styled.div`
    margin-top: 140px;
`