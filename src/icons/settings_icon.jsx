import { HugeiconsIcon } from '@hugeicons/react'
 
 
export function HugeIcon({
  size = 16,
  color = 'currentColor',
  strokeWidth = 1.5,
  ...rest
}) {
  return (
    <HugeiconsIcon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      {...rest}
    />
  )
}