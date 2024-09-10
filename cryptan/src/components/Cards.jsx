import '../App.css';
import bg2 from './bg2.jpg'


const Cards = (( { heading, content }) => {

    return (
    <div class="container">
        <div class="glass-card two">
            <h2>{heading}</h2>
            <img src = {content}></img>
            <button>Click Me</button>
        </div>
    </div>
    )

});

export default Cards;