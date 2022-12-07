// Path: ./store/slices/userSlice.ts
import { StateCreator } from 'zustand'
import { SettingsState } from './settingsSlice'

export interface User {
	id: string
	email: string
	name: string
	image: string
}

export interface UserState {
	user: User | null
	setUser: (user: User) => void
	logout: () => void
}

export const createUserSlice: StateCreator<UserState & SettingsState, [], [], UserState> = set => ({
	user: {
		id: '',
		email: '',
		name: '',
		image: '',
	},
	setUser: (user: User) => set({ user }),
	logout: () => set({ user: null }),
})
