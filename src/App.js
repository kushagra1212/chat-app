
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Chat from './chat/Chat';
import Join from './join/Join';
import styles from "./app.module.css"
const  App=()=>
{
    return(
        <div className={styles.appdiv}>
            
            <Router>
                <Route path={'/Chat'} component={Chat} />
                <Route path={'/chat-app'} exact component={Join}  />
                
            </Router>

        </div>
    )

}
export default App;