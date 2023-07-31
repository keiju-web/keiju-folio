import MenuItem from '@mui/material/MenuItem'
import TextField, { TextFieldProps } from '@mui/material/TextField'

import { FieldWrapper, FieldWrapperPassThroughProps } from '../FieldWrapper'
import { Options } from '../types'

export type SelectProps<T extends number | string = number> = {
  fieldWrapper: FieldWrapperPassThroughProps
  muiTextField?: TextFieldProps
  options: Options<T>
}

export const Select = <T extends number | string = number>({
  fieldWrapper,
  muiTextField,
  options,
}: SelectProps<T>): JSX.Element => {
  return (
    <FieldWrapper {...fieldWrapper}>
      <TextField
        size='small'
        select
        error={!!fieldWrapper?.errorMessage}
        {...muiTextField}
        sx={{
          '& label': {
            color: 'primary.main',
          },
          ...muiTextField?.sx,
        }}
      >
        {options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>
    </FieldWrapper>
  )
}
