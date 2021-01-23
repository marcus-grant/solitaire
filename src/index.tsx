import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import { Button } from 'rebass/styled-components';
import { Box, Card, Flex, Link, Text } from 'rebass/styled-components';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* NAV */}
    <Flex 
      px={2}
      color='black'
      bg='white'
      alignItems='center'
     >
      <Text p={2} fontWeight='bold'>Rebass</Text>
      <Box mx='auto' />
      <Link variant='nav' href='#!'>Menu</Link>
    </Flex>
    {/* Board */}
    <Flex
      px={4}
      bg='#154f30'
      alignItems='center'
    >
      <Flex>
        <Card bg='red' width={64} height={128}>
          <Text color='white'>CardStack</Text>
        </Card>
      </Flex>
    </Flex>

    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
