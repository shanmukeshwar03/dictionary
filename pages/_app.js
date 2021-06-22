import { Provider } from 'react-redux';
import store from 'redux/store';
import 'styles/globals.css';
import 'styles/home.css';
import 'styles/form.css';
import 'styles/result.css';
import 'styles/skeleton.css';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
