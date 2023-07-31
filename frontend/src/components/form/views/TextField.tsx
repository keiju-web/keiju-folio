import { FC } from 'react'

import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'
import { FieldWrapper, FieldWrapperPassThroughProps } from 'components/form/FieldWrapper'

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
          ...muiTextField?.sx,
        }}
        error={!!fieldWrapper.errorMessage}
      />
    </FieldWrapper>
  )
}
