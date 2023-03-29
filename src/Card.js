import "./Card.css";


function Card({ name, rossy, email, starDate, id }) {

    return (
        <div className='profile-box  dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img alt='profile' width='200' src={`https://cdn-icons-png.flaticon.com/512/3135/3135823.png`} />
            <div className='black'>
                <h2>{name}</h2>
                <p>Rossy : {rossy}</p>
                <p>Email : {email}</p>
                <p>Stardate : {starDate}</p>
            </div>
        </div>
    );
}

export default Card;