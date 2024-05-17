import React, { useContext } from 'react'
import { View } from 'react-native'
import { LanguageContext, ThemeContext } from '../../../App'
import CustomButton from '../../atoms/global_atoms/CustomButton';
import TransferDataContent from '../../organisms/transfer_organisms/TransferDataContent';
type OTPTemplateProps = {
    goNext: () => void
}

const TransferDataTemplate = ({ goNext }: OTPTemplateProps) => {
    const theme = useContext(ThemeContext);
    const language = useContext(LanguageContext);
    const [type, setType] = React.useState("");
    const [from, setFrom] = React.useState("");
    const [to, setTo] = React.useState("");
    const [amount, setAmount] = React.useState("");
    const [reason, setReason] = React.useState("");

    const transferType = [
        { key: '1', value: language?.languageData.transferTypeDataTxt.betweenAcount },
        { key: '2', value: language?.languageData.transferTypeDataTxt.anotherAccountSameBank },
        { key: '3', value: language?.languageData.transferTypeDataTxt.differentBank },
        { key: '4', value: language?.languageData.transferTypeDataTxt.international },
        { key: '5', value: language?.languageData.transferTypeDataTxt.billPayment },
        { key: '6', value: language?.languageData.transferTypeDataTxt.mobileWallet },
        { key: '7', value: language?.languageData.transferTypeDataTxt.scheduled },
        { key: '8', value: language?.languageData.transferTypeDataTxt.standing },
        { key: '9', value: language?.languageData.transferTypeDataTxt.charityDonation },
        { key: '10', value: language?.languageData.transferTypeDataTxt.loanPayment },
    ];
    const transferdFrom = [
        { key: '1', value: '042-653214521245 - $2,145,5874.25' },
        { key: '2', value: '010-845623154789 - $5,987.50' },
        { key: '3', value: '073-123456789012 - $1,250.00' },
        { key: '4', value: '080-987654321098 - $10,000.00' },

    ]
    const transferdTo = [
        { key: '1', value: '042-653214521245 - $2,145,5874.25 (Checking Account)' },
        { key: '2', value: '010-845623154789 - $5,987.50 (Savings Account)' },
        { key: '3', value: '073-123456789012 - $1,250.00 (Money Market Account)' },
        { key: '4', value: '080-987654321098 - $10,000.00 (Investment Account)' },
    ]

    return (
        <View style={theme?.ThemeData.containerStyles.signUpTemplateContainer}>
            <TransferDataContent
                amount={amount}
                setAmount={setAmount}

                reason={reason}
                setReason={setReason}

                from={from}
                setFrom={setFrom}
                transferFrom={transferdFrom}

                to={to}
                setTo={setTo}
                transferTo={transferdTo}

                type={type}
                setType={setType}
                transferType={transferType}
            />

            <CustomButton
                disabled={ amount === ''}
                style={{ marginBottom: '6%' }}
                text={language?.languageData.transferTitle}
                onPress={() => goNext()}
            />
        </View>
    )
}

export default TransferDataTemplate
