import { FC, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { Profile } from './Profile';
//import Business from './Business';
//import Construction from './Construction';
//import RecordList from './RecordList';
import { RecordDetail } from './RecordDetail';
//import NewsList from './NewsList';
//import NewsDetail from './NewsDetail';
//import Contact from './Contact';
//import Error404 from './Error404';
import { Footer } from './Footer';
import { ScrollToTop }  from './ScrollToTop';


export const App: FC = () => {
    const [className, setClassName] = useState<string>();

    return (
        <div>
        <Header />
        <main>
            <ScrollToTop />
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
        <Footer />
        </div>
    );
};