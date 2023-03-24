export function AdditionalInfoButtons({onClickCast, onClickReview}) {

    const onClick = e => {
        e.preventDefault();
        switch(e.target.id){
            case "cast":
                console.log('cast clicked');
                //onClickCast();
                break;
            case "reviews":
                onClickReview();
                break;
            default:
                return;
        };
    };


    return (
        <ul>
            <li><a href="asd" id="cast" onClick={onClick}>Cast</a></li>
            <li><a href="asd" id="reviews" onClick={onClick}>Reviews</a></li>
        </ul>
    );
};