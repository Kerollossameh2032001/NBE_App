import React, { useContext, useState } from 'react'
import { Text, View } from 'react-native'
import BuildListItem from '../../molecules/beneficiary_molecules/BuildListItem'
import { AccountsData, transactionsHistoryData, } from '../../../core/dummy_data/BeneficiaryData'
import { LanguageContext, ThemeContext } from '../../../App'
import constantImages from '../../../core/constants/constant_images'
import EmptyBodyContent from '../../organisms/beneficiaries_organisms/EmptyBodyContent'
import TransactionsHistory from '../../organisms/beneficiaries_organisms/TransactionsHistory'

type BeneficiaryDetailsProps = {
  itemId: number | undefined,
  goBack: () => void
}
const BeneficiaryDetails = ({ itemId, goBack }: BeneficiaryDetailsProps) => {
  const model = AccountsData.find((item) => item.key === (itemId ?? 0));
  const transectionData = transactionsHistoryData.find((item) => item.accountId === (itemId ?? 0));
  const theme = useContext(ThemeContext);
  const language = useContext(LanguageContext);


  function getCurrentContent(): JSX.Element {

    return transectionData?.historyData.length === 0 ?
      <EmptyBodyContent
        emptyIcon={constantImages.beneficiaryEmptyIcon}
        title={language?.languageData.beneficiaryDetailsEmpty.title}
        subTitle1={language?.languageData.beneficiaryDetailsEmpty.subTitle1}
        subTitle2={language?.languageData.beneficiaryDetailsEmpty.subTitle2}
      /> :
      <TransactionsHistory data={transectionData?.historyData} />
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingVertical: '7%' }}>
        {model && (
          <BuildListItem
            onPress={goBack}
            model={model}
          />
        )}
      </View>
      <Text style={theme?.ThemeData.textStyle.titleMeduim}>{language?.languageData.transactionsTitle}</Text>

      {getCurrentContent()}

    </View>
  )
}

export default BeneficiaryDetails
