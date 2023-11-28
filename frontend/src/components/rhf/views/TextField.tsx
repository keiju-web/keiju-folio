import MuiTextField from '@mui/material/TextField'
import { FieldWrapper } from 'components'

import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'
import type { FieldWrapperPassThroughProps } from 'components'
import type { FC } from 'react'

export type TextFieldProps = {
  fieldWrapper: FieldWrapperPassThroughProps
  muiTextField?: MuiTextFieldProps
}

export const TextField: FC<TextFieldProps> = ({ fieldWrapper, muiTextField }) => {
  return (
    <FieldWrapper {...fieldWrapper}>
      <MuiTextField
        size='small'
        {...muiTextField}
        sx={{
          '& label': {
            color: 'primary.main',
          },
          backgroundColor: '#f0f0f0',
          ...muiTextField?.sx,
        }}
        error={!!fieldWrapper.errorMessage}
      />
    </FieldWrapper>
  )
}
