import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { restLink } from './api/config';
import './scss/main.scss';
import Page from './components/Page';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink,
    fetchOptions: {
        mode: 'no-cors'
    }
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Page />
        </ApolloProvider>
    );
}

export default App;
