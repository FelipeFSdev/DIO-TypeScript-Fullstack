interface props {
    id: number
    subtitle: string
    paragraph: string
}

export const Card = ({ id, subtitle, paragraph }: props) => {
    return (
        <div>
            <h1> Card {id} </h1>
            <h2> {subtitle} {id} </h2>
            <p> {paragraph} </p>
        </div>
    )
}