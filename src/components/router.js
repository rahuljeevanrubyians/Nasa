import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';

const AppNavigator = createStackNavigator(
  {
    HOME: Home,
  },
  {
    initialRouteName: 'HOME',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
