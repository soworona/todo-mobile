import { createNavigationContainerRef } from '@react-navigation/native';
import { StackParamList } from './types';

export const navigationRef = createNavigationContainerRef<StackParamList>();


export function navigate<Name extends keyof StackParamList>(
  name: Name,
  params?: StackParamList[Name]
) {
  if (navigationRef.isReady()) {
    (navigationRef.navigate as any) (name, params);
  }  }

