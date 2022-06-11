import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { check, setTempUser } from './slices/userSlice';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));

function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;

    const userParsed = JSON.parse(user);
    const { username } = userParsed;
    console.log('user parsed', userParsed.username);

    const temp = store.dispatch(setTempUser({ userParsed }));
    console.log('temp', temp);
    // temp.then((res) => console.log("temp", res));
    const checkTemp = store.dispatch(check({ username }));
    console.log('check temp', checkTemp);
  } catch (error) {
    console.log(error);
  }
}
loadUser();
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>,
);
