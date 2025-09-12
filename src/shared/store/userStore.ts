import { create } from 'zustand'

interface UserStore {
    id: number;
    username: string;
    coins: number;

    setUserStore(id: number, username: string, coins: number): void;
    setCoinsStore(coins: number): void;
    addCoinsStore(coins: number): void;
    removeCoinsStore(coins: number): void;
}

const useUserStore = create<UserStore>()((set) => ({
    id: 0,
    username: '',
    coins: 0,
    setUserStore: (id, username, coins) => set(() => ({ id, username, coins })),
    setCoinsStore: (coins) => set(() => ({ coins })),
    addCoinsStore: (coins) => set((state) => ({ coins: state.coins + coins })),
    removeCoinsStore: (coins) => set((state) => ({ coins: state.coins - coins })),
}))


export { useUserStore };
