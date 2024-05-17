import React from 'react'
import Svg, { SvgProps, Path, Defs, RadialGradient, Stop } from "react-native-svg";

interface DisplayMinLogoProps extends SvgProps {
    color?: string;
}

const DisplayMinLogo = ({ color, ...props }: DisplayMinLogoProps) => {
    return (
        <Svg
            width={34}
            height={39}
            fill="none"
            {...props}
        >
            <Path
                fill="url(#a)"
                d="M8.132 8.86a9.035 9.035 0 0 0 8.92 10.492c4.991 0 9.043-4.042 9.043-9.037 0-.497-.038-.983-.116-1.456H8.132Z"
            />
            <Path
                fill="url(#b)"
                d="M15.013 38.67h4.086V22.353h-4.086v16.315ZM8.07 34.917c0 3.1 2.244 3.665 3.405 3.747h.689V22.354H8.07v12.564Zm13.878-12.564v16.31h.697c1.116-.08 3.208-.593 3.394-3.343V22.353h-4.091v.001Z"
            />
            <Path
                fill={color || "#007236"}
                d="M28.482 0H5.627A5.51 5.51 0 0 0 .113 5.517v23.19c0 2.837 1.715 5.171 4.467 5.482V4.516h24.98v29.667c2.729-.327 4.44-2.65 4.44-5.475V5.517A5.514 5.514 0 0 0 28.482 0Z"
            />
            <Defs>
                <RadialGradient
                    id="a"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="translate(-9.132 6.194) scale(57.3261)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.005} stopColor="#FBED1F" />
                    <Stop offset={0.117} stopColor="#FBE91F" />
                    <Stop offset={0.24} stopColor="#FADB20" />
                    <Stop offset={0.368} stopColor="#F8C520" />
                    <Stop offset={0.5} stopColor="#F6A721" />
                    <Stop offset={0.633} stopColor="#F28022" />
                    <Stop offset={0.725} stopColor="#F06023" />
                    <Stop offset={1} stopColor="#F06023" />
                </RadialGradient>
                <RadialGradient
                    id="b"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(47.8146 0 0 47.8148 -1.252 15.482)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.005} stopColor="#FFEB00" />
                    <Stop offset={0.879} stopColor="#F06023" />
                    <Stop offset={1} stopColor="#F06023" />
                </RadialGradient>
            </Defs>
        </Svg>
    )
}

export default DisplayMinLogo
