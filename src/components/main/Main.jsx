import { PageContainer } from "components/pageContainer/pageContainer";
import { MoviesList } from "components/moviesList/MoviesList";
import { MainTag } from "./Main.styled";

export function Main() {
    return (
        <MainTag>
            <PageContainer>
                <div>
                    <MoviesList title="Trending today"/>
                </div>
            </PageContainer>
        </MainTag>
    );
};