import { FC, PropsWithChildren, type ReactNode } from "react";

type CardProps = PropsWithChildren<{
    title: string;
    actions: ReactNode
}>

const Card: FC<CardProps> = ({ children, title, actions }) => {
    return (
        <section className="card">
            <h2>{title}</h2>
            {children}
            {actions}
        </section>
    );
};

export default Card;