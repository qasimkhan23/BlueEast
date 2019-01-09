import React from 'react';
import { AppRegistry ,View,Text} from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import  Stories from "./storybook/"
import Router from './Routes';

const Client = new ApolloClient({
    link: createHttpLink({ uri: 'https://api-euwest.graphcms.com/v1/cjq6gabwabltl01bn1hwrbrym/master' }),
  cache: new InMemoryCache(),
    
  });


const App = () => (
   <ApolloProvider client={Client}>
    {/* <Stories/> */}
    <Router/>
    
    
   </ApolloProvider>
);

AppRegistry.registerComponent('MyApplication', () => App);
 //export default from './storybook';
 export default App;