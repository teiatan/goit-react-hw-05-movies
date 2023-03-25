import { Ul, HeaderTag, NavTag } from "./Layout.styled";
import { PageContainer } from "components/pageContainer/pageContainer";
import { StyledNavLink } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import { Main } from "components/main/Main";

export function Layout() {

    return (
        <>
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
            <Main>
                <Outlet />
            </Main>  
        </>
    );
};