import { Ul, HeaderTag, NavTag } from "./Header.styled";
import { PageContainer } from "components/pageContainer/pageContainer";
import { NavLink } from "react-router-dom";

export function Header({changeCurrentPage}) {

    const onChangeCurrentPage = e => {
        if(e.target.nodeName === 'LI') {
            changeCurrentPage(e.target.id);
        };
    };

    return (
        <HeaderTag>
            <PageContainer>
                <NavTag>
                    <a href="public/index.html">🎬</a>
                    <Ul onClick={onChangeCurrentPage}>
                        <li id="home"><NavLink to="/">Home</NavLink></li>
                        <li id="movies"><NavLink to="/movies">Movies</NavLink></li>
                    </Ul>
                </NavTag>
            </PageContainer>
        </HeaderTag>
    );
};