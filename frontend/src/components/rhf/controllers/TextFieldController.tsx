import { TextField } from '../views/TextField'

import type { TextFieldProps } from '../views/TextField'
import type { FieldPathByValue, FieldValues, UseFormRegisterReturn } from 'react-hook-form'

type TextFieldControllerProps<TFieldValues extends FieldValues> = {
  registration: UseFormRegisterReturn<FieldPathByValue<TFieldValues, string>>
  textField: TextFieldProps
}

export const TextFieldController = <TFieldValues extends FieldValues>({
  registration,
  textField: { fieldWrapper, muiTextField },
}: TextFieldControllerProps<TFieldValues>): JSX.Element => {
  return (
    <TextField
      fieldWrapper={{ ...fieldWrapper }}
      muiTextField={{
        ...muiTextField,
        ...registration,
      }}
    />
  )
}
