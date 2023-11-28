import { useController } from 'react-hook-form'

import { CheckboxGroup } from '../views/CheckBoxGroup'

import type { Options } from '../types'
import type { CheckboxGroupProps } from '../views/CheckBoxGroup'
import type { FieldPathByValue, FieldValues, UseControllerProps } from 'react-hook-form'

type CheckboxGroupControllerProps<
  TFieldValues extends FieldValues,
  TValue extends string | number,
> = {
  controller: UseControllerProps<TFieldValues, FieldPathByValue<TFieldValues, TValue[]>>
  checkboxGroup: Omit<CheckboxGroupProps, 'options'> & {
    options: Options<TValue>
  }
}

export const CheckboxGroupController = <
  TFieldValues extends FieldValues,
  TValue extends string | number = number,
>({
  controller,
  checkboxGroup,
}: CheckboxGroupControllerProps<TFieldValues, TValue>): JSX.Element => {
  const {
    field: { value, onChange, ...field },
    fieldState: { error },
  } = useController(controller)
  // PathValue<TFieldValues, FieldPathByValue<TFieldValues, TValue[]>> == TValue[]
  const formValue = value as TValue[]
  const { fieldWrapper, muiCheckbox, options: checkboxOptions } = checkboxGroup

  const handleChange = (value: TValue) => {
    const newValue = formValue.includes(value)
      ? formValue.filter((v) => v !== value)
      : [...formValue, value]
    onChange(newValue)
  }

  const options = checkboxOptions.map(({ label, value }) => ({
    label,
    value,
    checked: formValue.includes(value),
    onChange: () => handleChange(value),
  }))

  return (
    <CheckboxGroup
      fieldWrapper={{ ...fieldWrapper, errorMessage: error?.message }}
      muiCheckbox={{
        ...muiCheckbox,
        ...field,
      }}
      options={options}
    />
  )
}
