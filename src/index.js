import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import {Provider} from "react-redux";

ReactDOM.render(<>
    <Provider store={store}>
        <App/>
    </Provider>
</>, document.getElementById('root'));

/*state={state}
dispatch={store.dispatch.bind(store)}
store={store}*/


//rerender();
/*store.subscribe(() => {
    let state = store.getState();
    //rerender(state);
});*/
//store._callSubscriber(store.getState());

serviceWorker.unregister();
