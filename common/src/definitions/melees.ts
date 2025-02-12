import { type ItemDefinition } from "../utils/objectDefinitions";
import { v, type Vector } from "../utils/vector";

export interface MeleeDefinition extends ItemDefinition {
    readonly type: "melee"

    readonly damage: number
    readonly obstacleMultiplier: number
    readonly radius: number
    readonly offset: Vector
    readonly cooldown: number
    readonly fists: {
        readonly animationDuration: number
        readonly randomFist: boolean
        readonly left: Vector
        readonly right: Vector
        readonly useLeft: Vector
        readonly useRight: Vector
    }
    readonly image?: {
        readonly position: Vector
        readonly usePosition: Vector
        readonly angle?: number
        readonly useAngle?: number
    }
    readonly fireMode?: "single" | "auto"
}

export const Melees: MeleeDefinition[] =
[
    {
        idString: "fists",
        name: "Fists",
        type: "melee",
        damage: 20,
        obstacleMultiplier: 2,
        radius: 1.5,
        offset: v(2.5, 0),
        cooldown: 250,
        fists: {
            animationDuration: 125,
            randomFist: true,
            left: v(38, 35),
            right: v(38, -35),
            useLeft: v(75, 10),
            useRight: v(75, -10)
        }
    },
    {
        idString: "dagger",
        name: "Dagger",
        type: "melee",
        damage: 30,
        obstacleMultiplier: 0.75,
        radius: 2.2,
        offset: v(3, 0.75),
        cooldown: 250,
        fists: {
            animationDuration: 125,
            randomFist: false,
            left: v(38, 35),
            right: v(38, -35),
            useLeft: v(70, 20),
            useRight: v(38, -35)
        },
        image: {
            position: v(62, 45),
            usePosition: v(92, 10),
            angle: 60,
            useAngle: 15
        }
    },
    {
        idString: "branch",
        name: "Branch",
        type: "melee",
        damage: 10,
        obstacleMultiplier: 0.5,
        radius: 3,
        offset: v(3, 0.75),
        cooldown: 250,
        fists: {
            animationDuration: 125,
            randomFist: false,
            left: v(38, 35),
            right: v(38, -35),
            useLeft: v(75, 20),
            useRight: v(38, -35)
        },
        image: {
            position: v(72, 45),
            usePosition: v(95, 0),
            angle: 60,
            useAngle: 0
        }
    },
    {
        idString: "club",
        name: "Club",
        type: "melee",
        damage: 25,
        obstacleMultiplier: 1,
        radius: 3,
        offset: v(3, 0.75),
        cooldown: 300,
        fists: {
            animationDuration: 125,
            randomFist: false,
            left: v(38, 35),
            right: v(38, -35),
            useLeft: v(75, 20),
            useRight: v(38, -35)
        },
        image: {
            position: v(72, 45),
            usePosition: v(95, 0),
            angle: 60,
            useAngle: 0
        }
    },
    {
        idString: "club_op",
        name: "Club OP",
        type: "melee",
        damage: 30,
        obstacleMultiplier: 1,
        radius: 3,
        offset: v(3, 0.75),
        cooldown: 300,
        fists: {
            animationDuration: 125,
            randomFist: false,
            left: v(38, 35),
            right: v(38, -35),
            useLeft: v(75, 20),
            useRight: v(38, -35)
        },
        image: {
            position: v(72, 45),
            usePosition: v(95, 0),
            angle: 60,
            useAngle: 0
        }
    }
];
