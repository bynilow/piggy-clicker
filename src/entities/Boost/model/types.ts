interface NeedToUnblock {
    id: string;
    level: number;
};

interface PassiveBoostModel {
    id: string;
    title: string;
    imagePath?: string;
    level: number;
    amount: number;
    cost: number;
    needToUnblock?: NeedToUnblock[];
}

interface ActiveBoostModel {
    id: string;
    title: string;
    imagePath?: string;
    level: number;
    type: 'click';
    amount: number;
    cost: number;
    needToUnblock?: NeedToUnblock[];
}

interface EmployeeBoostModel {
    id: string;
    title: string;
    imagePath?: string;
    level: number;
    amount: number;
    cost: number;
    needToUnblock?: NeedToUnblock[];
}

export type { PassiveBoostModel, ActiveBoostModel, EmployeeBoostModel, NeedToUnblock };
