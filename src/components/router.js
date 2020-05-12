import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Details from '../screens/Details';
import Home from '../screens/Home';

const AppNavigator = createStackNavigator(
  {
    HOME: Home,
    DETAILS: Details,
  },
  {
    initialRouteName: 'HOME',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
