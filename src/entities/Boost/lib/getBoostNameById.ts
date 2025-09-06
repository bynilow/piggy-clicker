import { activeBoostsList, employeeBoostsList, passiveBoostsList } from "../constants"

const getBoostNameById = (id: string) => {
    return [...passiveBoostsList, ...activeBoostsList, ...employeeBoostsList].find(boost => boost.id === id)?.title || '';
}

export { getBoostNameById };
