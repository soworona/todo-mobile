import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  Todo: NavigatorScreenParams<BottomTabParamList>;
  AddTodo: undefined;
  Details: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Menu: undefined;
  Profile: undefined;
};

export type RootStackScreenProps<T extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, T>;

export type HomeTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof StackParamList>
  >;

  declare global {
    namespace RootNavigation {
        interface RootParamList extends StackParamList {}
    }
  }