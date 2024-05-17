import React, { useContext } from 'react'
import { View } from 'react-native'
import TitlesComponent from '../../molecules/signUp_molecules/TitlesComponent'
import DropDownList from '../../molecules/global_molecules/DropDownList'
import TextField from '../../molecules/global_molecules/TextField'
import { LanguageContext } from '../../../App'

type TransferDataContentProps = {
    type: string,
    setType: React.Dispatch<React.SetStateAction<string>>,
    transferType: any,

    to: string,
    setTo: React.Dispatch<React.SetStateAction<string>>,
    transferTo: any,

    from: string,
    setFrom: React.Dispatch<React.SetStateAction<string>>,
    transferFrom: any,

    amount: string,
    setAmount: React.Dispatch<React.SetStateAction<string>>,

    reason: string,
    setReason: React.Dispatch<React.SetStateAction<string>>,

}
const TransferDataContent = ({
    setType,
    type,
    transferType,
    setFrom,
    from,
    transferFrom,
    to,
    setTo,
    transferTo,
    amount,
    setAmount,
    reason,
    setReason,
}: TransferDataContentProps) => {
    const language = useContext(LanguageContext);
    return (
        <View style={{paddingBottom: '5%'}}>
            <TitlesComponent
                title={language?.languageData.transferTitle}
                subTitle=''
            />
            <DropDownList
                label={language?.languageData.transferTypeTitle}
                data={transferType}
                selected={type}
                setSelected={setType}
            />
            <DropDownList
                label={language?.languageData.transferFromTitle}
                data={transferFrom}
                selected={from}
                setSelected={setFrom}
            />
            <DropDownList
                label={language?.languageData.transferToTitle}
                data={transferTo}
                selected={to}
                setSelected={setTo}
            />

            <TextField
                label={language?.languageData.amountOfTransferTitle}
                placeholder='$6,580.00'
                setValue={setAmount}
                value={amount}
                enableFocus={true}
                style={{ marginTop: '2%', paddingVertical: '1%' }}
            />
            <TextField
                placeholder={language?.languageData.reasonOfTransferTitle}
                setValue={setReason}
                value={reason}
                enableFocus={true}
                multiline={true}
                style={{ marginTop: '2%', paddingVertical: '1%' }}
            />
        </View>
    )
}

export default TransferDataContent
