import React from 'react'
import TinderCard from 'react-tinder-card'
import './SmartCards.css'

const SmartCards = () => {

    const [cards, setCards] = React.useState([
        {
            name: "Ash",
            url:"https://media.glamourmagazine.co.uk/photos/64db3dc64d3671f197210b68/16:9/w_1920,h_1080,c_limit/ASHLEY%20OLSEN%20KID%20150823%20default-GettyImages-1127333930.jpg"
        },
        {
           name: "Jen",
           url:"https://people.com/thmb/2B8bIrttLn36XWM_Z5UsEQh5Jgk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/jennifer-lopez-1-3515996e5fee4258b7cd05df72bfbe38.jpg"
        },
        {
            name:"Liz",
            url:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2023-08/230803-lizzo-se-556p-4221bc.jpg"
        },
        {
            name:"Natalie",
            url:"https://m.media-amazon.com/images/M/MV5BYzU0ZGRhZWItMGJlNy00YzlkLWIzOWYtNDA2NzlhMDg3YjMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
        },
        {
            name: "Emma",
            url:"https://cdn.britannica.com/78/194178-050-7ABF2B15/Emma-Stone-La-Land-Damien-Chazelle.jpg"
        },
        {
            name:"Jess",
            url:"https://phantom-marca.unidadeditorial.es/c8828220c0170f182a3883b7bf806a2b/resize/828/f/jpg/assets/multimedia/imagenes/2023/08/20/16925615694283.jpg"
        },
        {
            name:"Lisa",
            url:"https://chatelaine.com/wp-content/uploads/2023/01/body-positivity-middle-age-social.jpg"
        },
        {
            name:"Shakira",
            url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Shakira_for_VOGUE_in_2021_2.png/640px-Shakira_for_VOGUE_in_2021_2.png"
        },
        {
            name:"Bee",
            url:"https://binarynewsnetwork.com/wp-content/uploads/2022/03/1-1.jpg"
        }
    ]);

  return (
    <div className='card-container'>

    {
    cards.map(card => (
        <TinderCard 
        className='swipe'
        key={card.name}
        preventSwipe={['up', 'down']}
        >
            <div style={{backgroundImage: `url(${card.url})`}} className='card'>
                <h2>{card.name}</h2>
            </div>
        </TinderCard>
    ))
    }
    </div>
)}

export default SmartCards