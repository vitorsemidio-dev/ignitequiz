import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Finish } from '../screens/Finish';
import { History } from '../screens/History';
import { Home } from '../screens/Home';
import { Quiz } from '../screens/Quiz';

const { Group, Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="home" component={Home} />
      <Screen name="history" component={History} />
      <Group
        screenOptions={{
          gestureEnabled: false,
        }}>
        <Screen name="finish" component={Finish} />
        <Screen name="quiz" component={Quiz} />
      </Group>
    </Navigator>
  );
}
