import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DetailPage from '../feature/detailPage';
import { inject } from 'mobx-react';

@inject('root')
export default class Home extends React.Component {
  constructor() {
    super();

    this.showDetailPage = this.showDetailPage.bind(this);
  }

  componentWillMount() {

  }

  showDetailPage(charity) {
    this.props.navigation.push('Detail', {charity});
  }

  render() {
    console.log(this.props.root);
    const charityList = this.props.root.listPage.list.map(charity => (
      <View style={styles.list}>
        <Button
          onPress={() => this.showDetailPage(charity)}
          id={charity.id}
          title={charity.title}
          description={charity.description}
          url={charity.url}
        />
      </View>  
  ));

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Donate to a Charity!</Text>
        </View>
        <View style={styles.body}>
          {charityList}
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
