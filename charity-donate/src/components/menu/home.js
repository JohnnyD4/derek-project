import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DetailPage from '../feature/detailPage';

export default class Home extends React.Component {
  constructor() {
    super();

    this.showDetailPage = this.showDetailPage.bind(this);
  }

  showDetailPage(id) {
    // this.setState({ id: 1 });
    console.log(id);
    // this.props.navigation.push('Detail', {charityId: this.state.id});
    // this.props.screenProps
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Donate to a Charity!</Text>
        </View>
        <View style={styles.body}>
          <Button
            onPress={this.showDetailPage}
            title='Go to charity'
            id='1'
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
  }
});
