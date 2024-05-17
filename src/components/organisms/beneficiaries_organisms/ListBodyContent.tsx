import React, { useContext } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../../../App';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDollar, faPhone } from '@fortawesome/free-solid-svg-icons';
import BuildContactInfo from '../../molecules/beneficiary_molecules/BuildContactInfo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BuildListItem from '../../molecules/beneficiary_molecules/BuildListItem';

type ListBodyContentProps = {
  data: {
    key: string;
    name: string;
    lastName: string;
    image: any;
    number: string;
    accountBalance: string;
  }[],
}

const ListBodyContent = ({ data }: ListBodyContentProps) => {
  const theme = useContext(ThemeContext);
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) =>
        <BuildListItem
          model={item}
          onPress={() => { }}
        />
      }
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.key}
      
    />
  )
}

export default ListBodyContent

