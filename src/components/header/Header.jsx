import { Ul, HeaderTag, NavTag } from "./Header.styled";
import { PageContainer } from "components/pageContainer/pageContainer";
import { NavLink } from "react-router-dom";

export function Header() {

    return (
        <HeaderTag>
            <PageContainer>
                <NavTag>
                    <a href="public/index.html">🎬</a>
                    <Ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Movies</NavLink></li>
                    </Ul>
                </NavTag>
            </PageContainer>
        </HeaderTag>
    );
};