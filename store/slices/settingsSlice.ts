// Path: ./store/slices/settingsSlice.ts

import { Theme } from '@mui/material'
import { StateCreator } from 'zustand'
import { UserState } from './userSlice'
import { defaultTheme } from '../../theme'

export interface Settings {
	darkMode: boolean
	customPalette: typeof defaultTheme.palette
	theme: Theme
}

export interface SettingsState {
	darkMode: boolean
	customPalette: typeof defaultTheme.palette
	theme: Theme
	setDarkMode: (darkMode: boolean) => void
	setCustomPalette: (customPalette: typeof defaultTheme.palette) => void
	setTheme: (theme: Theme) => void
}

export const createSettingsSlice: StateCreator<
	SettingsState & UserState,
	[],
	[],
	SettingsState
> = set => ({
	darkMode: false,
	customPalette: defaultTheme.palette,
	theme: defaultTheme,
	setDarkMode: (darkMode: boolean) => set({ darkMode }),
	setCustomPalette: (customPalette: typeof defaultTheme.palette) => set({ customPalette }),
	setTheme: (theme: Theme) => set({ theme }),
})
