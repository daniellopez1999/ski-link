export interface Lesson {
    name: string,
    resort: string,
    level: string,
    date: string,
    lessons: string[],
    weather: string[]
}

export interface RatingsList {
    _id: string,
    name: string,
    score: number,
    comment: string
}

export interface Review {
    name: string,
    score: number,
    comment: string,
    reviews: string
}

