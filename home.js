import React from 'react';
import { Platform, Text, Linking, View, SafeAreaView } from 'react-native';

class Home extends React.Component<{}, { text: string }> {
state = {
  text: "Look, I'm safe! Not under a status bar or notch or home indicator or anything! Very cool"
};

static navigationOptions = {
    title: 'Home',
};

componentDidMount() { 
  console.log(`componentDidMount`);
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
          console.log(`[android] on open url: ${url}`);
        this.navigate(url);
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }

    setTimeout(()=> {
      this.setState({
        text: `handle open url`
      });
    }, 2000);
  }
  
  componentWillUnmount() { 
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = (event) => { 
    console.log(`handle open url: ${event.url}`);

    this.setState({
      text: `handle open url: ${event.url}`
    });
    this.navigate(event.url);
  }
  
  navigate = (url) => { // E
    const { navigate } = this.props.navigation;
    // const route = url.replace(/.*?:\/\//g, '');
    // const id = route.match(/\/([^\/]+)\/?$/)[1];
    // const routeName = route.split('/')[0];
  
    // if (routeName === 'dumpster') {
    //   navigate('Dumster', { id, name: 'chris' })
    // };
  }
  render() {
    return (
      <Text>
      {this.state.text}
    </Text>
    );
  }
}

export default Home;