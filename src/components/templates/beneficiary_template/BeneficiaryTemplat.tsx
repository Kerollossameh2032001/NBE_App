import React, { useContext, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppBar from '../../organisms/global_organisms/AppBar'
import { ThemeContext } from '../../../App'
import CustomToggleButton from '../../atoms/global_atoms/CustomToggleButton'
import constantImages from '../../../core/constants/constant_images'
import CustomSwitchTab from '../../molecules/beneficiary_molecules/CustomSwitchTab'
import BeneficiaryHeader from '../../organisms/beneficiaries_organisms/BeneficiaryHeader'
import ListBodyContent from '../../organisms/beneficiaries_organisms/ListBodyContent'
import EmptyBodyContent from '../../organisms/beneficiaries_organisms/EmptyBodyContent'
import GridBodyContent from '../../organisms/beneficiaries_organisms/GridBodyContent'

type BeneficiaryTemplatProps = {
    openDrawer: () => void,
}
type binifeciaryDataType = {
    key: string;
    name: string;
    lastName: string;
    image: any;
    number: string;
    accountBalance: string;
}[];

const BeneficiaryTemplat = ({ openDrawer }: BeneficiaryTemplatProps) => {
    const [isGrid, setIsGrid] = useState<boolean>(true);
    const beneficiariesData : binifeciaryDataType = [
        { key: '1', name: 'Hala', lastName: 'Ahmed', image: constantImages.beneficiaryDummeyData.image1, number: '042-653214521245', accountBalance: '1,245.25' },
        { key: '2', name: 'Sam', lastName: 'Smith', image: constantImages.beneficiaryDummeyData.image2, number: '042-653214521246', accountBalance: '3,548.75' },
        { key: '3', name: 'Marten', lastName: 'Brown', image: constantImages.beneficiaryDummeyData.image3, number: '042-653214521247', accountBalance: '2,985.50' },
        { key: '4', name: 'Jose', lastName: 'Garcia', image: constantImages.beneficiaryDummeyData.image4, number: '042-653214521248', accountBalance: '4,152.00' },
        { key: '5', name: 'Casy', lastName: 'Johnson', image: constantImages.beneficiaryDummeyData.image5, number: '042-653214521249', accountBalance: '5,632.85' },
        { key: '6', name: 'Robert', lastName: 'Wilson', image: constantImages.beneficiaryDummeyData.image6, number: '042-653214521250', accountBalance: '1,985.25' },
        { key: '7', name: 'Martha', lastName: 'Martinez', image: constantImages.beneficiaryDummeyData.image7, number: '042-653214521251', accountBalance: '3,457.90' },
        { key: '8', name: 'Alexa', lastName: 'Davis', image: constantImages.beneficiaryDummeyData.image8, number: '042-653214521252', accountBalance: '2,654.50' },
        { key: '9', name: 'Yara', lastName: 'Lopez', image: constantImages.beneficiaryDummeyData.image9, number: '042-653214521253', accountBalance: '4,123.75' },
        { key: '10', name: 'Karen', lastName: 'Gonzalez', image: constantImages.beneficiaryDummeyData.image10, number: '042-653214521254', accountBalance: '1,785.60' },
        { key: '11', name: 'Khaled', lastName: 'Lee', image: constantImages.beneficiaryDummeyData.image11, number: '042-653214521255', accountBalance: '3,928.80' },
        { key: '12', name: 'Monica', lastName: 'Clark', image: constantImages.beneficiaryDummeyData.image12, number: '042-653214521256', accountBalance: '2,450.25' },
        { key: '13', name: 'Walter', lastName: 'Harris', image: constantImages.beneficiaryDummeyData.image13, number: '042-653214521257', accountBalance: '4,785.90' },
        { key: '14', name: 'Hravey', lastName: 'King', image: constantImages.beneficiaryDummeyData.image14, number: '042-653214521258', accountBalance: '1,234.75' },
        { key: '15', name: 'Mohamed', lastName: 'Scott', image: constantImages.beneficiaryDummeyData.image15, number: '042-653214521259', accountBalance: '3,564.10' },
        { key: '16', name: 'Charlet', lastName: 'Green', image: constantImages.beneficiaryDummeyData.image16, number: '042-653214521260', accountBalance: '2,789.25' },
        { key: '17', name: 'Mike', lastName: 'Baker', image: constantImages.beneficiaryDummeyData.image17, number: '042-653214521261', accountBalance: '4,152.00' },
        { key: '18', name: 'Rachel', lastName: 'Nelson', image: constantImages.beneficiaryDummeyData.image18, number: '042-653214521262', accountBalance: '1,876.50' },
        { key: '19', name: 'Ross', lastName: 'Carter', image: constantImages.beneficiaryDummeyData.image19, number: '042-653214521263', accountBalance: '3,654.85' },
        { key: '20', name: 'Omar', lastName: 'Mitchell', image: constantImages.beneficiaryDummeyData.image20, number: '042-653214521264', accountBalance: '2,345.90' },
        { key: '21', name: 'Sara', lastName: 'Perez', image: constantImages.beneficiaryDummeyData.image21, number: '042-653214521265', accountBalance: '4,562.75' },
        { key: '22', name: 'Soha', lastName: 'Roberts', image: constantImages.beneficiaryDummeyData.image22, number: '042-653214521266', accountBalance: '1,478.30' },
        { key: '23', name: 'Ayman', lastName: 'Turner', image: constantImages.beneficiaryDummeyData.image23, number: '042-653214521267', accountBalance: '3,785.45' },
        { key: '24', name: 'Lina', lastName: 'Phillips', image: constantImages.beneficiaryDummeyData.image24, number: '042-653214521268', accountBalance: '2,354.60' },
        { key: '25', name: 'Mire', lastName: 'Campbell', image: constantImages.beneficiaryDummeyData.image25, number: '042-653214521269', accountBalance: '4,231.15' },
    ];

    function getContent(): JSX.Element {
        if (beneficiariesData.length === 0) {
            return <EmptyBodyContent />
        }

        return isGrid ?
            <GridBodyContent
                data={beneficiariesData}
            /> :
            <ListBodyContent
                data={beneficiariesData}
            />;
    }

    return (
        <View style={{ flex: 1 }}>
            <AppBar openDrawer={openDrawer} />
            <BeneficiaryHeader
                isGrid={isGrid}
                setIsGrid={setIsGrid}
                addEvent={() => { }} />
            {getContent()}
        </View>
    )
}

export default BeneficiaryTemplat
