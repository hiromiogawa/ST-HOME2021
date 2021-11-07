import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { LogoFlugProvider } from './providers/LogoFlugProvider';
import { FontStyles } from "./styleSetting/FontStyle";
import { createGlobalStyle } from 'styled-components'
import { reset } from './styleSetting/StyledReset'

// reset.css
const ResetStyle = createGlobalStyle`
    ${reset}
`

ReactDOM.render((<BrowserRouter><LogoFlugProvider><ResetStyle /><FontStyles /><App /></LogoFlugProvider></BrowserRouter>), document.getElementById('root'));