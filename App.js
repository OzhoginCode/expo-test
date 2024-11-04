import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import ProgrammingLanguageItem from './components/ProgrammingLanguageItem.jsx';

const programmingLanguages = [
  {
    id: 1,
    languageName: 'JavaScript',
    experience: 'Опыт: 3 года',
    logoSource: require('./assets/JS-logo.png'),
  },
  {
    id: 2,
    languageName: 'Java',
    experience: 'Опыт: 3 года',
    logoSource: require('./assets/Java-logo.png'),
  },
  {
    id: 3,
    languageName: 'Python',
    experience: 'Опыт: 1 года',
    logoSource: require('./assets/Python-logo.png'),
  },
  {
    id: 4,
    languageName: 'Go',
    experience: 'Опыт: 2 года',
    logoSource: require('./assets/Golang-logo.png'),
  },
  {
    id: 5,
    languageName: 'PHP',
    experience: 'Опыт: отсутствует',
    logoSource: require('./assets/PHP-logo.png'),
  },
];

export default () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* <View style={styles.container}> */}
          <FlatList 
            data={programmingLanguages}
            renderItem={({ item }) =>
              (
                <ProgrammingLanguageItem
                  languageName={item.languageName}
                  experience={item.experience}
                  logoSource={item.logoSource}
                />
              )}
          />
          {/* <ProgrammingLanguageItem
            languageName={'JS'}
            experience={'Опыт: 1 год'}
            logoSource={require('./assets/JS-logo.png')}
          /> */}
          {/* <StatusBar style="auto" /> */}
        {/* </View> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});