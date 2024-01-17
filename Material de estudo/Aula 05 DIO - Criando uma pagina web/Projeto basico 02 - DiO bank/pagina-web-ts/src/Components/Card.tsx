interface idCard {
    id: number
    paragraph: string
}

export const Card = ({ id, paragraph }: idCard) => {
    return (
        <div>
            Card {id}
            {paragraph}
        </div>
    )
}