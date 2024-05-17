import React from 'react'
import Svg, { SvgProps, Path } from "react-native-svg"
const CardIcon = (props: SvgProps) => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <Path
                fill="#1B1B1B"
                d="M0 9.048c0 .288.132.564.366.767.235.204.552.318.884.318h12.5c.332 0 .65-.114.884-.318.234-.203.366-.48.366-.767V5.067H0v3.98Zm5-1.539c0-.072.033-.14.092-.191a.338.338 0 0 1 .22-.08h3.542c.083 0 .163.029.221.08.059.05.092.12.092.191v.905a.255.255 0 0 1-.092.192.338.338 0 0 1-.22.08H5.311a.338.338 0 0 1-.22-.08A.255.255 0 0 1 5 8.414V7.51Zm-3.333 0c0-.072.033-.14.091-.191a.338.338 0 0 1 .221-.08h1.875c.083 0 .163.029.221.08.059.05.092.12.092.191v.905a.255.255 0 0 1-.092.192.338.338 0 0 1-.22.08H1.978a.338.338 0 0 1-.22-.08.255.255 0 0 1-.092-.192V7.51ZM13.75 0H1.25C.918 0 .6.114.366.318.132.522 0 .798 0 1.086V2.17h15V1.086c0-.288-.132-.564-.366-.768A1.352 1.352 0 0 0 13.75 0Z"
                opacity={0.4}
            />
            <Path fill="#1B1B1B" d="M15 5.067H0V2.17h15v2.896Z" />
        </Svg>
    )
}

export default CardIcon
