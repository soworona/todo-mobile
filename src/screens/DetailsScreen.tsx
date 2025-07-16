import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../redux/hook';
import { RouteProp, useRoute } from '@react-navigation/native';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { task } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Title</Text>
        <Text>Akkdkd</Text>
      </View>
      <View>
        <Text style={styles.heading}>Description</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          eum adipisci soluta cumque ipsum voluptates odit iusto perferendis
          maxime fugit, suscipit numquam, officia beatae temporibus dolorem
          quibusdam tenetur mollitia nobis.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical:30,
    gap: 10,
  },
  heading: {
    fontWeight: 600,
    fontSize: 20,
  },
});

export default DetailsScreen;
