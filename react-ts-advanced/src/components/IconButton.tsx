import { ComponentPropsWithoutRef, type ElementType, FC, type ReactNode } from "react";

type IconBtnProps = {
    icon: ElementType;
    children: ReactNode;
} & ComponentPropsWithoutRef<'button'>


const IconButton: FC<IconBtnProps> = ({ children, icon: Icon, ...props }) => {
    return (
        <button {...props}>
            <span><Icon /></span>
            <span>{children}</span>
        </button>
    );
};

export default IconButton;