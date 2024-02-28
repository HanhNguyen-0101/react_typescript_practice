import { FC, PropsWithChildren } from "react"

type HeaderProps = PropsWithChildren<{img: {src: string, alt: string}}>;

const Header: FC<HeaderProps> = ({img, children}) => {
    return (
        <div>
            <img src={img.src} alt={img.alt} />
            {children}
        </div>
    );
};

export default Header;