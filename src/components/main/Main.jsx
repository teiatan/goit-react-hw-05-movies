import PropTypes from "prop-types";
import { PageContainer } from "components/pageContainer/pageContainer";
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