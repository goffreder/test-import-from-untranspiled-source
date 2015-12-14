import Test from './components/Test';

if (process.env.NODE_ENV !== 'production') {
    ReactDOM.render(
        <Test />,
        document.getElementById('app')
    );
}

export default Test;
