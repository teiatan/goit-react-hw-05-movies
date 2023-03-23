import { Ul, HeaderTag, NavTag } from "./Header.styled";
import { PageContainer } from "components/pageContainer/pageContainer";

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
                        <li id="home">Home</li>
                        <li id="movies">Movies</li>
                    </Ul>
                </NavTag>
            </PageContainer>
        </HeaderTag>
    );
};