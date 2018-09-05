import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory';
import {createLogger} from 'redux-logger';


// 1. Initialize
const app = dva({
    history: createHistory(),
    onAction: createLogger(),
    initialState: {}
});
// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/count').default);
app.model(require('./models/products').default);
app.model(require('./models/poetryList').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');



export default app._store;