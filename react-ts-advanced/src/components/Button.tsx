import { type ComponentPropsWithoutRef, FC } from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string
};

type BtnProps = ButtonProps | AnchorProps;

function isAnchorProps(props: BtnProps): props is AnchorProps {
    return 'href' in props;
}

const Button: FC<BtnProps> = (otherProps) => {
    if (isAnchorProps(otherProps)) {
        return <a className="button" {...otherProps}></a>
    }
    return (
        <button className="button" {...otherProps}></button>
    );
};

export default Button;