import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { COLORS } from '../../constants/constants';

interface Props {
  screen?: number,
  title: string,
}

interface Propss extends DrawerScreenProps<any, any>{}

export const Header = (props: Props) => {
  const navigation = useNavigation();
  const { title, screen = 1} = props;
  return (
    (screen === 1)
      ? <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.menuText}>
              <Icon name="menu" size={30} color="#fff" />
            </Text>
          </View>
          <View>
            <Text style={styles.menuText}>
              {title}
            </Text>
          </View>
          <View>
            <TouchableWithoutFeedback>
            {/* //  onPress= { ()=> navigation.navigate('Profile')} */}
              <View>
                <Text style={styles.menuText}>
                  <Icon name="person-circle-sharp" size={30} color="#fff" />
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </SafeAreaView>
      : <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.menuText}>
              {title}
            </Text>
          </View>
          <View>
            <TouchableWithoutFeedback >
            {/* //  onPress= { ()=> navigation.navigate('Profile')} */}
              <View>
                <Text style={styles.menuText}>
                  <Icon name="person-circle-sharp" size={30} color="#fff" />
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: '8%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: COLORS.mainColor,
  },

  menuText: {
    color: COLORS.textColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
