import { db } from "helpers/db"
import { create } from "zustand"

import { AuthState, LoadingState } from "../types"

const useAuthStore = create<AuthState>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
  login: async (email, password) => {
    if (!email) return Promise.reject("Email is required")
    if (!password) return Promise.reject("Password is required")

    const { data, error } = await db.auth.signInWithPassword({
      email,
      password,
    })
    if (error) return Promise.reject(error)

    set({ session: data.session })
    return Promise.resolve(data.user)
  },
  register: async (email, password) => {
    if (!email) return Promise.reject("Email is required")
    if (!password) return Promise.reject("Password is required")

    const { data, error } = await db.auth.signUp({
      email,
      password,
    })
    if (error) return Promise.reject(error)

    set({ session: data.session })
    return Promise.resolve(data.user)
  },
  logout: async () => {
    const { error } = await db.auth.signOut()
    if (error) return Promise.reject(error)
    set({ session: null })
    return Promise.resolve()
  },
}))

const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),
}))

export { useAuthStore, useLoadingStore }
