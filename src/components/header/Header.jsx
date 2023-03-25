import { Ul, HeaderTag, NavTag } from "./Header.styled";
import { PageContainer } from "components/pageContainer/pageContainer";
import { StyledNavLink } from "./Header.styled";

export function Header() {

    return (
        <HeaderTag>
            <PageContainer>
                <NavTag>
                    <a href="/">🎬</a>
                    <Ul>
                        <li><StyledNavLink to="/">Home</StyledNavLink></li>
                        <li><StyledNavLink to="/movies">Movies</StyledNavLink></li>
                    </Ul>
                </NavTag>
            </PageContainer>
        </HeaderTag>
    );
};