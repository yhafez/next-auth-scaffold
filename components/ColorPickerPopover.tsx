// Path: ./components/ColorPickerPopover.tsx

import { useState, useCallback } from 'react'
import { Popover, PopoverOrigin } from '@mui/material'
import { useBoundStore } from '../store'
import { ChromePicker } from 'react-color'

export interface ColorPickerPopoverProps {
	name: string
	open: boolean
	anchorEl: HTMLButtonElement | null
	handleClose: () => void
	handleColorChange: (color: string) => void
	anchorOrigin?: PopoverOrigin
	transformOrigin?: PopoverOrigin
}

const ColorPickerPopover = ({
	name,
	open,
	anchorEl,
	handleClose,
	handleColorChange,
	anchorOrigin,
	transformOrigin,
}: ColorPickerPopoverProps) => {
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
			open={open}
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

export default ColorPickerPopover
