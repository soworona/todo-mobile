import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/wallhaven-x69pdo.png')}
        style={styles.bgImg}
      />
      <View style={styles.header}>
        <Image
          source={require('../../assets/Zhongli_Icon.webp')}
          style={styles.avatar}
        />
        <View style={{
            justifyContent:'center'
        }}>
          <Text style={styles.heading}>Profile</Text>`{' '}
          <Text style={styles.subheading}>This is my bio. Hello~~~</Text>
        </View>
      </View>

      <View style={styles.card}>
                  <Text>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
bgImg: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 260,
  opacity: 0.79,
},
  header: {
    position:'absolute',
    right: 'auto',
    justifyContent:'center',
    alignContent: 'center',
    left:30,
    top:80,
    gap: 10,
    flexDirection: 'row'
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',

  },
  subheading: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
    fontStyle: 'italic',

  },
  card:{
    backgroundColor:'white',
    flex:1,
    borderTopEndRadius:20,
    borderTopStartRadius: 20,
    zIndex: 1,
    marginTop:220,
    padding: 20
  }
});

export default ProfileScreen;
