interface NeedToUnblock {
    id: string;
    level: number;
};

interface PassiveBoostModel {
    id: string;
    title: string;
    imagePath?: string;
    amount: number;
    cost: number;
    needToUnblock?: NeedToUnblock[];
}

interface ActiveBoostModel {
    id: string;
    title: string;
    imagePath?: string;
    type: 'click';
    amount: number;
    cost: number;
    needToUnblock?: NeedToUnblock[];
}

interface EmployeeBoostModel {
    id: string;
    title: string;
    imagePath?: string;
    amount: number;
    cost: number;
    needToUnblock?: NeedToUnblock[];
}

interface BoostDto {
    id: string;
    boost_id: string;
    boost_level: number;
    user_id: number;
}

export type { PassiveBoostModel, ActiveBoostModel, EmployeeBoostModel, NeedToUnblock, BoostDto };
