import React from 'react';
import appStyle from './App,module.css';

// COMPONENTS =>
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';

import {BrowserRouter, Route} from "react-router-dom";


// data =>
let ChatData = [
    {name: 'Den', message: 'text'},
    {name: 'Alex', message: 'text 2'},
    {name: 'Sam', message: 'text 3'},
    {name: 'Ololo', message: 'text 4'},
    {name: 'Dadada', message: 'text 5'},
]

let DialogsData = [
    {name: 'John', id: 1},
    {name: 'Alex', id: 2},
    {name: 'Den', id: 3},
    {name: 'Lol', id: 4},
]

let CommentsData = [
    {
        name: 'CJ',
        avatar: 'https://i.ytimg.com/vi/HcGYElbP5BQ/maxresdefault.jpg',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, reiciendis!',
    },
    {
        name: 'Sweeeeeet',
        avatar: 'https://pbs.twimg.com/profile_images/1261895933115203584/ooQU4WTW.jpg',
        message: 'Wsap babe',
    },
    {
        name: 'Ryder',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgS9N3jZ_d2jCewvTDz4XyzYIjnDI7oCWXThC6Sd1OM-mIO5y0iRpAmYgeT_P2_Z-_NM&usqp=CAU',
        message: 'Fuck you!',
    },
]

// app =>
function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className={'app-wrapper-content'}>
                    <Route activeClassName={appStyle.active} path={'/profile'} render={ () => <Profile CommentsData={CommentsData}/> }/>

                    <Route activeClassName={appStyle.active} exact path={'/dialogs'} render={ () => <Dialogs ChatData={ChatData} DialogsData={DialogsData}/> }/>

                    <Route activeClassName={appStyle.active} path={'/news'} component={News}/>
                    <Route activeClassName={appStyle.active} path={'/music'} component={Music}/>
                    <Route activeClassName={appStyle.active} path={'/settings'} component={Settings}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
