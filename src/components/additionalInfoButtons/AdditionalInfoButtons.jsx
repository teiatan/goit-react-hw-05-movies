export function AdditionalInfoButtons({onClickCast, onClickReview}) {

    const onClick = e => {
        e.preventDefault();
        switch(e.target.id){
            case "cast":
                onClickCast();
                break;
            case "reviews":
                onClickReview();
                break;
            default:
                return;
        };
    };


    return (
        <ul> Additional information
            <li><a href="asd" id="cast" onClick={onClick}>Cast</a></li>
            <li><a href="asd" id="reviews" onClick={onClick}>Reviews</a></li>
        </ul>
    );
};