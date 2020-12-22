import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
  }, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

// creates a default 'App' component for export into 'node_modules/expo/AppEntry.js'
export default createAppContainer(navigator);