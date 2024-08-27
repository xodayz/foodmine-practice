import { Food } from "./app/shared/models/Food";

export const sample_foods: Food[] = [
    {
        id: "1",
        name: "Pizza",
        price: 9.99,
        tags: ["fast food", "italian"],
        favorite: true,
        stars: 4.0,
        imageURL: "assets/food-1.jpg",
        origins: ["Italy"],
        cookTime: "30 minutes"
    },
    {
        id: "2",
        name: "Burger",
        price: 5.99,
        tags: ["fast food", "american"],
        favorite: false,
        stars: 3.0,
        imageURL: "assets/food-3.jpg",
        origins: ["USA"],
        cookTime: "20 minutes"
    },
    {
        id: "3",
        name: "Sushi",
        price: 12.99,
        tags: ["japanese"],
        favorite: true,
        stars: 5.0,
        imageURL: "assets/food-7.jpg",
        origins: ["Japan"],
        cookTime: "40 minutes"
    }
]