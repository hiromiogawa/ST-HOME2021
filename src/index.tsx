import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LoadFlugProvider } from './providers/LoadFlugProvider';
import { LogoColorProvider } from './providers/LogoColorProvider';
import { MvFlugProvider } from './providers/MvFlugProvider';
import { FontStyles } from "./styleSetting/FontStyle";
import { createGlobalStyle } from 'styled-components'
import { reset } from './styleSetting/StyledReset'
import { App } from './components/App';
import { ScrollToTop } from './components/module/ScrollToTop';

// reset.css
const ResetStyle = createGlobalStyle`
    ${reset}
`

ReactDOM.render((
    <BrowserRouter>
        <LoadFlugProvider>
            <LogoColorProvider>
                <MvFlugProvider>
                    <ResetStyle />
                    <FontStyles />
                    <ScrollToTop />
                    <App />
                </MvFlugProvider>
            </LogoColorProvider>
        </LoadFlugProvider>
    </BrowserRouter>
), document.getElementById('root'));