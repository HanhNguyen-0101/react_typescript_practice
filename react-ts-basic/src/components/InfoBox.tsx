import { FC, PropsWithChildren } from "react";

type HintProps = PropsWithChildren<{mode: 'hint'}>;
type WarningProps = PropsWithChildren<{mode: 'warning', severity: 'low' | 'medium' | 'high'}>;
type InfoBoxProps = HintProps | WarningProps;

const InfoBox: FC<InfoBoxProps> = (props) => {
    const {children} = props;

    if (props.mode === 'hint') {
        return <aside className="infobox infobox-hint">
            <p>{children}</p>
        </aside>
    }
    return (
        <aside className={`infobox infobox-${props.severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    );
};

export default InfoBox;