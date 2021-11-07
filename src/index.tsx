import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LogoColorProvider } from './providers/LogoColorProvider';
import { FontStyles } from "./styleSetting/FontStyle";
import { createGlobalStyle } from 'styled-components'
import { reset } from './styleSetting/StyledReset'
import { App } from './components/App';
import { ScrollToTop } from './components/module/ScrollToTop';

// reset.css
const ResetStyle = createGlobalStyle`
    ${reset}
`

ReactDOM.render((<BrowserRouter><LogoColorProvider><ResetStyle /><FontStyles /><ScrollToTop /><App /></LogoColorProvider></BrowserRouter>), document.getElementById('root'));