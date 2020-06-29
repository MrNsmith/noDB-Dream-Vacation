
let destinations = [
    {
        id: 0,
        name: 'Paris',
        rating:  9,
        img:'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?$MO_masthead-property-mobile$' 
    },
    {
        id: 1,
        name: 'Rome',
        rating: 7,
        img: 'https://andantetravels.co.uk/media/2348/rome-colosseum.jpg' 
    },
    {
        id: 2,
        name: 'Tahiti',
        rating: 10,
        img:'https://tahititourisme.com/wp-content/uploads/2017/07/tahiti-vacation-packages-400x390.jpg'
    },
    {
        id: 3,
        name: 'Fiji',
        rating: 10,
        img: 'https://www.cunard.com/content/dam/cunard/inventory-assets/ports/SUV/SUV.jpg.1533905694747.image.750.563.low.jpg'
    },
    {
        id: 4,
        name: 'London',
        rating: 7,
        img:'https://cdn.studyinternational.com/news/wp-content/uploads/2019/07/London-390x249.jpg'
    },
    {
        id: 5,
        name: 'Yosemite',
        rating: 8,
        img: 'https://img.sunset02.com/sites/default/files/styles/marquee_large_2x/public/image/2017/04/main/el-capitan-getty-0517.jpg?itok=vuJS4hXh'
    },
    {
        id: 6,
        name: 'Grand Canyon',
        rating: 4,
        img: 'https://media.deseretdigital.com/file/aa89988589?type=jpeg&quality=55&c=15&a=4379240d'
    },
    {
        id: 7,
        name: 'Barcelona',
        rating : 2,
        img: 'https://www.theschooloflife.com/assets/7-Days-of-Emotional-Intelligence/events/Barcelona-H12.jpg'
    },
    {
        id: 8,
        name: 'New York City',
        rating: 3,
        img: 'https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg'
    },
]
let id = 9;
module.exports = {
     getVaca: (req, res)=> {
          res.status(200).send(destinations)

    },
    
    

    
    

}