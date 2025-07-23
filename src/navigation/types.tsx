import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  Todo: NavigatorScreenParams<BottomTabParamList>;
  AddTodo: undefined;
  Details: undefined;
  Signup: undefined;
  Login: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Menu: undefined;
  Profile: undefined;
};

export type MaterialTopParamList = {
  All: undefined;
  Active: undefined;
  Completed: undefined; 
}

export type MenuDrawerParamList = {
  BottomTab: undefined;
  Completed: undefined;
  Active: undefined;
}

export type RootStackScreenProps<T extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, T>;

export type HomeTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>, 
    RootStackScreenProps<keyof StackParamList>
  >;

export type MenuTopTabScreenProps<T extends keyof MaterialTopParamList> =
  CompositeScreenProps<
  MaterialTopTabScreenProps<MaterialTopParamList, T>,
  HomeTabScreenProps<'Menu'>
  >;

export type HomeDrawerScreenProps<T extends keyof MenuDrawerParamList> =
  CompositeScreenProps<
  DrawerScreenProps<MenuDrawerParamList, T>,
    RootStackScreenProps<keyof StackParamList>
  >;


  declare global {
    namespace RootNavigation {
        interface RootParamList extends StackParamList {}
    }
  }