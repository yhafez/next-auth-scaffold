// Path: ./store/slices/userSlice.ts
import { StateCreator } from 'zustand'
import { SettingsState } from './settingsSlice'

export interface User {
	id: string
	email: string
	emailVerified: Date | null
	image: string | null
	isDeactivated: boolean
	name: string | null
	role: 'USER' | 'ADMIN'
	createdAt: Date
	updatedAt: Date
}

export interface UserState {
	user: User | null
	setUser: (user: User | null) => void
	logout: () => void
}

export const createUserSlice: StateCreator<UserState & SettingsState, [], [], UserState> = set => ({
	user: null,
	setUser: (user: User | null) => set({ user }),
	logout: () => set({ user: null }),
})
