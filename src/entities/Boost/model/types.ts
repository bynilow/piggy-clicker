import { Rare } from "@/shared";

interface NeedToUnblock {
    id: string;
    level: number;
};

interface BaseBoostModel {
    id: string;
    rare: Rare;
    title: string;
    imagePath?: string;
    cost: number;
    createdDate?: Date;
    needToUnblock?: NeedToUnblock[];
}

interface PassiveBoostModel extends BaseBoostModel {
    amount: number;
}

interface ActiveBoostModel extends BaseBoostModel {
    type: 'click';
    amount: number;
}

interface EmployeeBoostModel extends BaseBoostModel {
    amount: number;
}

interface BoostDto {
    id: string;
    boost_id: string;
    boost_level: number;
    user_id: number;
}

export type { PassiveBoostModel, ActiveBoostModel, EmployeeBoostModel, NeedToUnblock, BoostDto, BaseBoostModel };
