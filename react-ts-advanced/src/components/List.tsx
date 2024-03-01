import { type ReactNode } from "react";

type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => ReactNode
}

function List<C>({ items, renderItem }: ListProps<C>) {
    return (
        <ul>
            {items.map(renderItem)}
        </ul>
    );
};

export default List;