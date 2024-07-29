import { StyleSheet } from 'react-native';

import AppLoading from 'expo-app-loading';

const styles= StyleSheet.create({
  splashLogo: {
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  splashLogoImage: {
    width: '80%',
    height: '30%',
    resizeMode: 'contain', 
  },
  splashTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingBottom: 50,
    color: '#ccccc',
  },
  splashFooter: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  }
});

export default styles;