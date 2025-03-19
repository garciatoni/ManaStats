import { createJSONStorage, persist } from "zustand/middleware";

import { checkAuth } from "../actions/authActions";
import { create } from "zustand";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,

      setUser: (user) => {set({ user })},

      logout: () => {
        set({ user: null });
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      },

      checkAuth: async () => {
        const token = await checkAuth();
        console.log("TOKEN AQUI: ",token)
        if (!token || typeof token !== "object") {
          set({ user: null });
          return;
        }
        set({ token });
      },

      
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
