import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
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
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatList 
          data={programmingLanguages}
          renderItem={({ item }) => (
            <ProgrammingLanguageItem
              languageName={item.languageName}
              experience={item.experience}
              logoSource={item.logoSource}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      </SafeAreaView>
      <StatusBar style="auto" />
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
