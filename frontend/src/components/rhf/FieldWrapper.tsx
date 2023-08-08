import { FC, PropsWithChildren } from 'react'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'

type FieldWrapperProps = PropsWithChildren<{
  label?: string
  required?: boolean
  errorMessage?: string
}>

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'children'>

/**
 * RHF - MUI
 * FYI. https://www.react-hook-form.com/get-started#IntegratingwithUIlibraries
 **/
export const FieldWrapper: FC<FieldWrapperProps> = ({
  label,
  required,
  errorMessage,
  children,
}) => {
  return (
    <FormControl fullWidth error={!!errorMessage}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Typography sx={{ fontSize: 20 }}>{label}</Typography>
          {required && (
            <Typography color='error' fontSize={'12px !important'}>
              ※Required
            </Typography>
          )}
        </Box>
        {children}
        {errorMessage && (
          <Typography color='error' fontSize={'12px !important'}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </FormControl>
  )
}
