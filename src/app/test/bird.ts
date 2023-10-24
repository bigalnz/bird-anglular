import { CurrentPIT } from "./current-pit";
import { CurrentTransmitter } from "./current-transmitter";

export interface Bird {
    name: string;
    sex: Sex;
    status: Status;
    currentPitCode?: String;
    currentTransmitter?: CurrentTransmitter;
    currentTransmitterConcat: String;
}

export enum Status {
    ALIVE,
    DECEASED
}

export enum Sex {
    MALE,
    FEMALE
}
