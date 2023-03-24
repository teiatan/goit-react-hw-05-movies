import { PageContainer } from "components/pageContainer/pageContainer";
import { MoviesList } from "components/moviesList/MoviesList";
import { MainTag } from "./Main.styled";

export function Main({movies}) {
    return (
        <MainTag>
            <PageContainer>
                <div>
                    <MoviesList title="Trending today" movies={movies}/>
                </div>
            </PageContainer>
        </MainTag>
    );
};