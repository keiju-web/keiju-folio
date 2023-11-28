import { useController } from 'react-hook-form'

import { MultiComboBox } from '../views/MultiComboBox'

import type { Options } from '../types'
import type { MultiComboBoxProps } from '../views/MultiComboBox'
import type { FieldPathByValue, FieldValues, UseControllerProps } from 'react-hook-form'

type MultiComboBoxControllerProps<
  TFieldValues extends FieldValues,
  TValue extends number | string,
> = {
  controller: UseControllerProps<TFieldValues, FieldPathByValue<TFieldValues, Options<TValue>>>
  multiComboBox: MultiComboBoxProps<TValue>
}

export const MultiComboBoxController = <
  TFieldValues extends FieldValues,
  TValue extends number | string = number,
>({
  controller,
  multiComboBox: { fieldWrapper, muiAutoComplete, muiTextField, options },
}: MultiComboBoxControllerProps<TFieldValues, TValue>): JSX.Element => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController(controller)

  return (
    <MultiComboBox<TValue>
      fieldWrapper={{
        ...fieldWrapper,
        errorMessage: error?.message,
      }}
      muiAutoComplete={{
        ...muiAutoComplete,
        value,
        onChange: (_, value) => onChange(value),
      }}
      muiTextField={muiTextField}
      options={options}
    />
  )
}
