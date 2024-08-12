import Animal from './Animal'


const AnimalContainer = () => {
    let animals = [
        { name: "Tiger", count: 500, isEndagered: true, photo: 'https://png.pngtree.com/png-clipart/20230323/ourmid/pngtree-tiger-cartoon-smiling-face-png-image_6658949.png' },
        { name: "Brown-Bear", count: 320, isEndagered: false, photo: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Disney-beast.PNG' },
        { name: "Panda-Bear", count: 300, isEndagered: true, photo: 'https://thumbs.dreamstime.com/b/cute-baby-panda-carton-illustration-cartoon-73043007.jpg' }
    ]

    return <>
        <Animal list={animals} >
            <h1>Endangered Animals</h1>
        </Animal>
``    </>
}

export default AnimalContainer;