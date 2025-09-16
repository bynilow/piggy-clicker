import { networkClient } from "@/shared";
import { ReferralDto } from "../model";
import { REFERRALS_ENDPOINT } from "../constants";

const fetchReferrals = async (): Promise<ReferralDto[]> => {
    const { data } = await networkClient.get<ReferralDto[]>(REFERRALS_ENDPOINT);

    return data;
}

export { fetchReferrals };
