import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { inject } from 'mobx-react';

@inject('root')
export default class DetailPage extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    console.log(this.props);
    const charity = this.props.navigation.state.params.charity;
    this.setState(charity);
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.state.title}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.label}>About the charity</Text>
          <Text style={styles.text}>{this.state.description}</Text>
          <Text style={styles.label}>Link to their site</Text>
          <Text style={styles.text}>{this.state.url}</Text>
          <Button
            onPress={() => alert('Thank you for donating')}
            title='Donate'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    height: 100,
    width: '100%',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#fff',
  },
  label: {
    fontSize: 20,
    
  },
  text: {

  },
  body: {
    alignItems: 'center',
  },
});
