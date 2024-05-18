import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import AppBar from '../../organisms/global_organisms/AppBar'
import { LanguageContext, ThemeContext } from '../../../App'
import constantImages from '../../../core/constants/constant_images'
import BeneficiaryHeader from '../../organisms/beneficiaries_organisms/BeneficiaryHeader'
import ListBodyContent from '../../organisms/beneficiaries_organisms/ListBodyContent'
import EmptyBodyContent from '../../organisms/beneficiaries_organisms/EmptyBodyContent'
import GridBodyContent from '../../organisms/beneficiaries_organisms/GridBodyContent'
import { AccountsData } from '../../../core/dummy_data/BeneficiaryData'

type BeneficiaryTemplatProps = {
    goToDetails: (itemId: number) => void,
    goToAdd: () => void,
}


const BeneficiaryTemplat = ({ goToDetails, goToAdd }: BeneficiaryTemplatProps) => {
    const [isGrid, setIsGrid] = useState<boolean>(true);
    const language = useContext(LanguageContext);

    function getContent(): JSX.Element {
        if (AccountsData.length === 0) {
            return <EmptyBodyContent
                emptyIcon={constantImages.noContentIcon}
                title={language?.languageData.noContentTitle}
                subTitle1={language?.languageData.noContentSubTitle1}
                subTitle2={language?.languageData.noContentSubTitle2}
                goToAdd={goToAdd}
            />
        }

        return isGrid ?
            <GridBodyContent
                goToDetails={goToDetails}
                data={AccountsData}
            /> :
            <ListBodyContent
                goToDetails={goToDetails}
                data={AccountsData}
            />;
    }

    return (
        <View style={{ flex: 1 }}>

            <BeneficiaryHeader
                isGrid={isGrid}
                setIsGrid={setIsGrid}
                addEvent={goToAdd} />
            {getContent()}
        </View>
    )
}

export default BeneficiaryTemplat
