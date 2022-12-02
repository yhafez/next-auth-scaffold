// Path: ./store/slices/settingsSlice.ts

import { StateCreator } from 'zustand'
import { UserState } from './userSlice'

export interface Settings {
	darkMode: boolean
}

export interface SettingsState {
	settings: Settings
	setSettings: (settings: Settings) => void
}

export const createSettingsSlice: StateCreator<
	SettingsState & UserState,
	[],
	[],
	SettingsState
> = set => ({
	settings: {
		darkMode: false,
	},
	setSettings: (settings: Settings) => set({ settings }),
})
