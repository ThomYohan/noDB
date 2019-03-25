let id = 1
let event = [
    {
        id: id++,
        location: 'arabica theatre, sand - iego, cali',
        date: '1/1',
        name: 'edc',
        imageUrl: 'https://www.vegasunzipped.com/wp-content/uploads/2016/05/edc-logo-electric-daisy-carnival-texas-youredm-edm-600x438.png'
    },
    {
        id: id++,
        location: 'idk anymore, s/o, yee',
        date: '2/2',
        name: 'something wicked',
        imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/8b3abf2b-74e9-4863-a938-b62cc10c1782/d4lcbbs-dcc70348-428d-43d3-9824-04c4167690b2.jpg/v1/fill/w_900,h_462,q_70,strp/something_wicked_logo_by_funderscore_d4lcbbs-fullview.jpg'

    },
    {
        id: id++,
        location: 'weee, wooo, weeewooo',
        date: '3/3',
        name: 'ayyyy',
        imageUrl:'https://res.cloudinary.com/teepublic/image/private/s--JWLPDAeR--/t_Preview/b_rgb:ffb81c,c_limit,f_jpg,h_630,q_90,w_630/v1514584572/production/designs/2234954_1.jpg'
    },
    {
        id: id++,
        location: 'wooow, weee, wooooww',
        date: '4/4',
        name: 'ubbi dubbi',
        imageUrl: 'https://pbs.twimg.com/profile_images/1056281169883512833/VtE5x8Wa_400x400.jpg'
    },
    {
        id: id++,
        location: 'holy ship',
        date: '5/5',
        name: 'holy ship',
        imageUrl: 'http://www.brevardtimes.com/wp-content/uploads/2018/01/18425429_1550026475010171_140783407372269615_n.png'
    }
]

module.exports = {
    get: (req, res) => {
        res.send(event)
    },
    create: (req, res) => {
        let { location, date, name, imageUrl } = req.body

        let concert = {
            id: id++,
            location,
            date,
            name,
            imageUrl
        }

        event.push(concert)
        res.send(event)
    },

    update: (req, res) => {
        let { location, date, name, imageUrl } = req.body

        let updatedConcerts = {
            id: req.params.id,
            location,
            date,
            name,
            imageUrl
        }

        let index = event.findIndex(event => Number(event.id) === Number(req.params.id))

        event.splice(index, 1, updatedConcerts)
        res.send(event)
    },

    delete: (req, res) => {
        let { id } = req.params

        let index = event.findIndex(event => Number(event.id) === Number(id))
        event.splice(index, 1)
        res.send(event)
    }
}