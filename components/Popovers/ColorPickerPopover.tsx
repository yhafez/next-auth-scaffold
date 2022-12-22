// Path: ./components/ColorPickerPopover.tsx
import { useState, useCallback } from 'react'
import { Popover, PopoverOrigin } from '@mui/material'
import { ChromePicker } from 'react-color'

import { useBoundStore } from '../../store'

export interface ColorPickerPopoverProps {
	name: string
	anchorEl: HTMLButtonElement | null
	handleClose: () => void
	handleColorChange: (color: string) => void
	anchorOrigin?: PopoverOrigin
	transformOrigin?: PopoverOrigin
}

export default function ColorPickerPopover({
	name,
	anchorEl,
	handleClose,
	handleColorChange,
	anchorOrigin,
	transformOrigin,
}: ColorPickerPopoverProps) {
	const { customPalette } = useBoundStore()

	const [color, setColor] = useState(customPalette.primary.main)

	const handleChange = useCallback(
		(color: any) => {
			setColor(color.hex)
			handleColorChange(color.hex)
		},
		[handleColorChange],
	)

	return (
		<Popover
			id={`${name}-color-picker-popover`}
			open={!!anchorEl}
			anchorEl={anchorEl}
			onClose={handleClose}
			anchorOrigin={anchorOrigin}
			transformOrigin={transformOrigin}
			sx={{
				cursor: 'pointer',
				'& .MuiPopover-paper': {
					padding: 2,
					backgroundColor: 'background.paper',
					color: 'text.primary',
				},
			}}
		>
			<ChromePicker color={color} onChange={color => handleChange(color)} disableAlpha />
		</Popover>
	)
}
