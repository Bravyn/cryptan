import '../styles/ImageCard.css'
import img1 from './giraffe.jpg'
import img2 from './bg2.jpg'
import img3 from './bluebeach.jpg'

const ImageCard = ((heading, content) => {

    return (
        <div class="card-container">

            <div class="card">
                <img src={img1} alt="Image 1" />
                <div class="card-content">
                    <h3>Maasai Mara</h3>
                    <p>The Maasai Mara in Kenya is a world-renowned wildlife reserve,
                        famous for its stunning landscapes and rich biodiversity,
                        including the iconic Big Five. It’s also the site of the Great Migration,
                        where millions of wildebeest, zebras,
                        and other animals cross the Mara River in a breathtaking natural spectacle.</p>
                    <a href="#" class="btn">Learn More</a>
                </div>
            </div>


            <div class="card">
                <img src={img2} alt="Image 2" />
                <div class="card-content">
                    <h3>Malindi</h3>
                    <p>Malindi, Kenya, is a coastal town known for its beautiful beaches,
                        rich history, and vibrant Swahili culture. Famous for attractions
                        like the Vasco da Gama Pillar
                        and the Malindi Marine National Park, it's a popular destination
                        for both relaxation and water sports.</p>
                    <a href="#" class="btn">Learn More</a>
                </div>
            </div>


            <div class="card">
                <img src={img3} alt="Image 3" />
                <div class="card-content">
                    <h3>Diani</h3>
                    <p>Diani, Kenya, is a tropical paradise located along the Indian Ocean,
                        famous for its pristine white sandy beaches and crystal-clear waters.
                        A popular destination for both relaxation and water sports,
                        it’s also known for its vibrant coral reefs,
                        lush greenery, and luxury beachfront resorts.</p>
                    <a href="#" class="btn">Learn More</a>
                </div>
            </div>
        </div>

    )

});

export default ImageCard;