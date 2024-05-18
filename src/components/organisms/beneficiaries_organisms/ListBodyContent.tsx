import React, { useContext } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../../../App';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDollar, faPhone } from '@fortawesome/free-solid-svg-icons';
import BuildContactInfo from '../../molecules/beneficiary_molecules/BuildContactInfo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BuildListItem from '../../molecules/beneficiary_molecules/BuildListItem';
import { binifeciaryAccountDataType } from '../../../core/dummy_data/BeneficiaryData';

type ListBodyContentProps = {
  data: binifeciaryAccountDataType[],
  goToDetails: (itemId: number) => void
}

const ListBodyContent = ({ data, goToDetails }: ListBodyContentProps) => {
  const theme = useContext(ThemeContext);
  return (
    <FlatList
      data={data}
      renderItem={({ item }) =>
        <BuildListItem
          model={item}
          onPress={() => {
            console.log(item.key);
            
            goToDetails(item.key);
          }}
        />
      }
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.key.toString()}

    />
  )
}

export default ListBodyContent

