/*tslint:disable interface-name*/

export interface Job {
    id: string;
    createdUtc: Date;
    updatedUtc: Date;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    duration: number;
    startTime: number;
    finishTime: number;
}

