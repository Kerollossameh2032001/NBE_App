import React from 'react'
import Svg, { SvgProps, Path } from "react-native-svg"

const CalculatorIcon = (props: SvgProps) => {
    return (
        <Svg
            width={18}
            height={18}
            fill="none"
            {...props}
        >
            <Path
                fill="#1B1B1B"
                d="M5.625 0H.937A.938.938 0 0 0 0 .938v4.687a.937.937 0 0 0 .938.938h4.687a.937.937 0 0 0 .938-.938V.937A.937.937 0 0 0 5.625 0Zm-.469 3.516a.234.234 0 0 1-.234.234H1.64a.234.234 0 0 1-.235-.234v-.47a.234.234 0 0 1 .235-.233h3.28a.234.234 0 0 1 .235.234v.469Zm.469 4.921H.937A.937.937 0 0 0 0 9.376v4.688A.938.938 0 0 0 .938 15h4.687a.938.938 0 0 0 .938-.938V9.375a.937.937 0 0 0-.938-.938Zm-.852 4.11a.234.234 0 0 1 0 .332l-.332.331a.234.234 0 0 1-.33 0l-.83-.828-.829.829a.234.234 0 0 1-.33 0l-.332-.332a.234.234 0 0 1 0-.331l.828-.83-.829-.828a.234.234 0 0 1 0-.331l.332-.332a.234.234 0 0 1 .331 0l.83.829.828-.829a.234.234 0 0 1 .331 0l.332.331a.234.234 0 0 1 0 .332l-.829.829.829.829ZM14.063 0H9.375a.937.937 0 0 0-.938.938v4.687a.937.937 0 0 0 .938.938h4.688A.937.937 0 0 0 15 5.625V.937A.938.938 0 0 0 14.062 0Zm-.47 3.516a.234.234 0 0 1-.234.234h-1.171v1.172a.235.235 0 0 1-.235.234h-.469a.235.235 0 0 1-.234-.234V3.75h-1.172a.234.234 0 0 1-.234-.234v-.47a.234.234 0 0 1 .234-.233h1.172V1.64a.235.235 0 0 1 .234-.235h.47a.235.235 0 0 1 .233.235v1.171h1.172a.234.234 0 0 1 .235.235v.469Z"
                opacity={0.4}
            />
            <Path
                fill="#1B1B1B"
                d="m4.773 10.558-.332-.331a.234.234 0 0 0-.33 0l-.83.829-.829-.829a.234.234 0 0 0-.331 0l-.332.332a.234.234 0 0 0 0 .33l.83.83-.83.829a.234.234 0 0 0 0 .33l.332.332a.234.234 0 0 0 .331 0l.83-.828.828.828a.234.234 0 0 0 .331 0l.332-.331a.234.234 0 0 0 0-.331l-.829-.83.829-.828a.234.234 0 0 0 0-.332Zm5.305-6.808h1.172v1.172a.235.235 0 0 0 .234.234h.47a.235.235 0 0 0 .233-.234V3.75h1.172a.234.234 0 0 0 .235-.234v-.47a.234.234 0 0 0-.235-.233h-1.171V1.64a.235.235 0 0 0-.235-.235h-.469a.235.235 0 0 0-.234.235v1.171h-1.172a.234.234 0 0 0-.234.235v.469a.234.234 0 0 0 .234.234Zm-5.156-.938H1.64a.234.234 0 0 0-.235.235v.469a.234.234 0 0 0 .235.234h3.28a.234.234 0 0 0 .235-.234v-.47a.234.234 0 0 0-.234-.233Zm9.14 5.626H9.375a.937.937 0 0 0-.938.937v4.688a.937.937 0 0 0 .938.937h4.688a.938.938 0 0 0 .937-.938V9.375a.938.938 0 0 0-.938-.938Zm-.468 4.453a.234.234 0 0 1-.235.234h-3.28a.235.235 0 0 1-.235-.234v-.47a.235.235 0 0 1 .234-.233h3.281a.235.235 0 0 1 .235.234v.469Zm0-1.875a.234.234 0 0 1-.235.234h-3.28a.235.235 0 0 1-.235-.234v-.47a.235.235 0 0 1 .234-.233h3.281a.235.235 0 0 1 .235.234v.469Z"
            />
        </Svg>
    )
}

export default CalculatorIcon