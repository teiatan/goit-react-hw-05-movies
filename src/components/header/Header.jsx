import { Ul, HeaderTag, NavTag } from "./Header.styled";
import { PageContainer } from "components/pageContainer/pageContainer";

export function Header({onClick}) {
    return (
        <HeaderTag>
            <PageContainer>
                <NavTag>
                    <a href="public/index.html">🎬</a>
                    <Ul>
                        <li id="home" onClick={onClick}>Home</li>
                        <li id="movies" onClick={onClick}>Movies</li>
                    </Ul>
                </NavTag>
            </PageContainer>
        </HeaderTag>
    );
};