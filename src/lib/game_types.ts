export enum GameTypes {
    Normal,
    TimeAttack,
}

export enum GameDifficulty {
    Easy,
    Medium,
    Hard,
}

export interface GameType {
    type: GameTypes,
    difficulty: GameDifficulty | undefined,
}

