import { FC, ElementType, ReactNode, ComponentPropsWithoutRef } from "react";

type ContainerProps<T extends ElementType> = {
    as?: T,
    children: ReactNode
} & ComponentPropsWithoutRef<T>

function Container<C extends ElementType>({as, children, ...props}: ContainerProps<C>) {
    const Component = as || 'div';
    return (
        <div>
            <Component className="container" {...props}>{children}</Component>
        </div>
    );
};

export default Container;