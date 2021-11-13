import { FC } from 'react';
import styled from 'styled-components';
import { Color } from '../../../styleSetting/Setting';
import { Scontents, Sheading02, Stext } from '../../../styleSetting/CommonStyle';

export const Vision: FC = () => {
    return (
        <Svision>
            <Scontents>
                <Sheading02><span>VISION</span></Sheading02>
                <Scatch><strong>生活スタイルの段階を上げる<br />
                昔夢見た空想の世界を現実に</strong></Scatch>
                <Stext>子供の頃自動車が空を走ることを想像したことはありませんか？<br />
                バックトゥーザ・フューチャーのような未来が来ることを。<br />
                弊社はそんな未来を現実とし、建築を通じて生活スタイルを変えることにより、<br />
                より豊かな日常へとレベルアップすることを目的に活動します。</Stext>
            </Scontents>
        </Svision>
    );
};

const Svision = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Scatch = styled.p`
    margin-bottom: 32px;
    line-height: 2;
    
    strong {
        color: ${Color.blue02};
        font-size: 24px;
        font-family: "游明朝","Yu Mincho",YuMincho,"ヒラギノ明朝 ProN W6","HiraMinProN-W6","HG明朝E","ＭＳ Ｐ明朝","MS PMincho","MS 明朝",serif;
        font-weight: 400;
    }
`

