import { View, Text, Image, StyleSheet } from 'react-native';

const ProgrammingLanguageItem = ({ languageName, experience, logoSource }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{languageName}</Text>
    <Text style={styles.experience}>{experience}</Text>
    <Image source={logoSource} style={styles.logo} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 16,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default ProgrammingLanguageItem;
