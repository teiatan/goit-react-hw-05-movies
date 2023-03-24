import PropTypes from "prop-types";
import { PageContainer } from "components/pageContainer/pageContainer";
import { MoviesList } from "components/moviesList/MoviesList";
import { OneMovie } from "components/moviesList/oneMovie/OneMovie";
import { MainTag } from "./Main.styled";

export function Main({children}) {
    return (
        <MainTag>
            <PageContainer>
                {children}
            </PageContainer>
        </MainTag>
    );
};

Main.propTypes = {
    children: PropTypes.node,
}