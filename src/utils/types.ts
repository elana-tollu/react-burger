export interface ITokens {
    accessToken: string,
    refreshToken: string
}

export interface IIngredient {
    _id: string,
    image: string, 
    price: number,
    name: string,
    calories: number,
    proteins: number,
    fat: number,
    carbohydrates: number
}