import { create } from 'zustand'

interface UserStore {
    id: number;
    username: string;
    coins: number;

    setUser(id: number, username: string, coins: number): void;
    setCoins(coins: number): void;
}

const useUserStore = create<UserStore>()((set) => ({
    id: 0,
    username: '',
    coins: 0,
    setUser: (id, username, coins) => set(() => ({ id, username, coins })),
    setCoins: (coins) => set(() => ({ coins })),
}))


export { useUserStore };
