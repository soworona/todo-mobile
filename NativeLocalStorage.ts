import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';
import { Task } from './src/screens/HomeBottomTab/TodoScreen';

export interface Spec extends TurboModule {
  setItem(task: Task, key: string): void;
  getItem(task: Task): string | null;
  removeItem(key: string): void;
  clear(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'NativeLocalStorage',
);