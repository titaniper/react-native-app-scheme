import * as React from 'react';
import { Text, Linking } from 'react-native';

const { useState, useEffect } = React;

const useOpenURL = () => {
  const [url, setURL] = useState('dd');

  const handleOpenURL = (event) => {
    setURL(event.url);
  };

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      setURL(url);
    });

    Linking.addEventListener('url', handleOpenURL);

    return () => Linking.removeEventListener('url', handleOpenURL);
  }, []);

  return url;
};

const Home = () => {
  const url = useOpenURL();

  return (
      <Text>
        {`open url: ${url}`}
      </Text>
  );
};

export default Home;