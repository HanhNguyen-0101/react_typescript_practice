import { type ComponentPropsWithoutRef, FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type ButtonProps = {
    to?: never;
    textOnly?: boolean;
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
    to?: string;
    textOnly?: boolean;
} & LinkProps;

function isAnchor(props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'to' in props;
}
const Button: FC<ButtonProps | AnchorProps> = (props) => {
    if (isAnchor(props)) {
        const { textOnly, children, ...otherProps } = props;
        return <Link className={`button ${textOnly ? 'button--text-only' : ''}`} {...otherProps}>{children}</Link>
    }
    const { textOnly, children, ...otherProps } = props;
    return <button className={`button ${textOnly ? 'button--text-only' : ''}`} {...otherProps}>{children}</button>
};

export default Button;