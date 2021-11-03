import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { LogoColorProvider } from './providers/LogoColorProvider';
import { FontStyles } from "./styleSetting/FontStyle";
import { createGlobalStyle } from 'styled-components'
import { reset } from './styleSetting/StyledReset'

// reset.css
const ResetStyle = createGlobalStyle`
    ${reset}
`

ReactDOM.render((<BrowserRouter><LogoColorProvider><ResetStyle /><FontStyles /><App /></LogoColorProvider></BrowserRouter>), document.getElementById('root'));