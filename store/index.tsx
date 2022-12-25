// Set up Zustand store for user
// Path: ./store/user.ts

import create from 'zustand'
import { persist } from 'zustand/middleware'
import { createUserSlice, UserState } from './slices/userSlice'
import { createSettingsSlice, SettingsState } from './slices/settingsSlice'

export const useBoundStore = create<UserState & SettingsState>()(
	persist(
		(set, get, ...a) => ({
			...createUserSlice(set, get, ...a),
			...createSettingsSlice(set, get, ...a),
		}),
		{
			name: 'state',
			getStorage: () => localStorage,
		},
	),
)
