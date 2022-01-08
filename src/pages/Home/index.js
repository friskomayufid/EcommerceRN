import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text, ScrollView} from 'react-native';
import {BannerSlider, Distance, ListJersey, ListLeague} from '../../components';
import Header from '../../components/Header';
import {dummyJerseys} from '../../data/dummyJersey';
import {dummyLigas} from '../../data/dummyLigas';
import {colors, fonts} from '../../utils';

const index = () => {
  const [ligas, setLigas] = useState(dummyLigas);
  const [jerseys, setJerseys] = useState(dummyJerseys);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <BannerSlider />
        <View style={styles.chooseLeague}>
          <Text style={styles.label}>Pilih Liga</Text>
          <ListLeague ligas={ligas} />
        </View>
        <View style={styles.chooseJersey}>
          <Text style={styles.label}>
            Pilih <Text style={styles.boldLabel}>Jersey</Text> Yang Anda
            Inginkan
          </Text>
          <ListJersey jerseys={jerseys} />
        </View>
        <Distance height={100}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  chooseLeague: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  chooseJersey: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  boldLabel: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
    fontWeight: 'bold',
  },
});

export default index;
