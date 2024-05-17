import React from 'react'
import Svg, { SvgProps, Path } from "react-native-svg"

const CertificateIcon = (props: SvgProps) => {
    return (
        <Svg
            width={20}
            height={20}
            fill="none"
            {...props}
        >
            <Path
                fill="#1B1B1B"
                d="M15 3.75V14.3a.702.702 0 0 1-.703.7H6.563v-2.672a1.81 1.81 0 0 0 1.04-1.204l.029-.115c.019-.075.04-.158.055-.206.033-.036.091-.094.144-.148l.085-.086a1.83 1.83 0 0 0 .463-1.74l-.03-.114c-.02-.077-.042-.161-.053-.21.01-.05.034-.135.054-.213l.03-.112a1.83 1.83 0 0 0-.458-1.736L7.84 6.36c-.054-.055-.114-.115-.148-.152-.015-.048-.036-.132-.056-.208a14.37 14.37 0 0 1-.03-.114 1.807 1.807 0 0 0-1.263-1.28h-.003l-.11-.03c-.072-.02-.15-.04-.198-.055a6.637 6.637 0 0 1-.146-.148l-.08-.081a1.784 1.784 0 0 0-1.742-.478h-.001l-.11.03c-.071.019-.147.04-.197.052V.7a.701.701 0 0 1 .696-.7h6.797v3.281a.469.469 0 0 0 .469.469H15Z"
                opacity={0.4}
            />
            <Path
                fill="#1B1B1B"
                d="M14.795 3.076 11.927.206A.702.702 0 0 0 11.429 0h-.179v3.281a.469.469 0 0 0 .469.469H15v-.179a.7.7 0 0 0-.205-.495ZM7.471 7.942a.883.883 0 0 0-.222-.843c-.435-.443-.393-.37-.553-.976a.866.866 0 0 0-.606-.615c-.595-.162-.523-.12-.958-.563a.847.847 0 0 0-.829-.228c-.595.162-.511.162-1.106 0a.848.848 0 0 0-.828.226c-.437.444-.366.401-.958.562a.865.865 0 0 0-.606.618c-.16.608-.117.531-.553.975a.883.883 0 0 0-.222.844c.16.607.158.521 0 1.125a.882.882 0 0 0 .222.844c.435.442.393.369.553.974a.865.865 0 0 0 .606.617c.42.115.338.088.464.147V15l1.875-.938L5.625 15v-3.35c.127-.06.045-.033.464-.147a.866.866 0 0 0 .607-.617c.16-.608.117-.532.553-.975a.882.882 0 0 0 .222-.843c-.16-.605-.16-.52 0-1.126Zm-3.72 2.37a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75Z"
            />
        </Svg>
    )
}

export default CertificateIcon
