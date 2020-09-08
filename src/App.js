import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/routes';
import GlobalStyle from './styles/Global';
import store from './store';


function App() {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<BrowserRouter>
				<Routes />
				<ToastContainer autoClose={5000} />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
