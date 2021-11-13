import { FC, useState, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoadFlugContext } from '../providers/LoadFlugProvider';
import { MvFlugContext } from '../providers/MvFlugProvider';
import { Header } from './template/Header';
import { Home } from './pages/home';
import { Profile } from './pages/Profile';
//import Business from './Business';
//import Construction from './Construction';
//import RecordList from './RecordList';
import { RecordDetail } from './pages/RecordDetail';
//import NewsList from './NewsList';
//import NewsDetail from './NewsDetail';
//import Contact from './Contact';
//import Error404 from './Error404';
import { Footer } from './template/Footer';
import styled from 'styled-components';
import { Color, Vw, Device } from '../styleSetting/Setting';
import { CustomMedia } from '../styleSetting/CustomMedia';

export const App: FC = () => {

    const { loadFlug } = useContext(LoadFlugContext);
    const { mvFlug } = useContext(MvFlugContext);

    return (
        <div>
        {
            (() => {
                if (loadFlug) {
                    return <Header />
                }         
            })()
        }
        <main>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/profile' exact>
                    <Profile />
                </Route>
                <Route path='/record/detail/:id'>
                    <RecordDetail />
                </Route>

                {/*<Route path='/business' exact component={Business} />
                <Route path='/record/:id' exact component={RecordList} />*/}
                {/*<Route path='/news/:id' exact component={NewsList} />
                <Route path='/news/detail/:id' exact component={NewsDetail} />
                <Route path='/construction' exact component={Construction} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/404' exact component={Error404} />
                <Redirect to='/404' />*/}
            </Switch>
        </main>
        {
        (() => {
            if (loadFlug && !mvFlug) {
                return <Footer />
            } else if(!loadFlug) {
                <div>Load</div>
            }
        })()
        }
        </div>
    );
};

const Sheading = styled.h1`
    font-family: 'NotoSerifJPMedium';
    color: ${Color.blue01};
    font-size: ${Vw(60, Device.pc)};

    ${CustomMedia.lessThan("ct")`
        font-size: 100px;
    `};
`