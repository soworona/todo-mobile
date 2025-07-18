import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  Home: undefined;
  AddTodo: undefined;
  Details: undefined;
};

export type BottomTabParamList = {
  HomeTab: undefined;
  Menu: undefined;
  Profile: undefined;
};

export type RootStackScreenProps<T extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, T>;

export type HomeTabParamList = {
  Home: undefined;
  Menu: undefined;
  Profile: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof StackParamList>
  >;

  declare global {
    namespace RootNavigation {
        interface RootParamList extends StackParamList {}
    }
  }