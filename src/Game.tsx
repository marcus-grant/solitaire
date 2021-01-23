import React from 'react';
import { Card, Flex, Text } from 'rebass/styled-components';

export const Game = () => {
  return (
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
  );
};

export default Game;