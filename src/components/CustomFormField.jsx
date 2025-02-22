import React, { useState } from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { useFormContext } from 'react-hook-form'
import { SelectItem,Select,SelectTrigger,SelectContent,SelectValue } from './ui/select'
import DatePicker from "react-datepicker";
import calender from '../assets/form_icons/calendar.svg' 
const RenderField = ({ props, field }) => {
  const { control, name, label, placeholder, iconSrc, fieldType, onChange, value } = props
  const { register } = useFormContext()
  switch (fieldType) {
    case 'input':
      return (
        <div className='flex rounded-md relative items-center'>
          {iconSrc && (
            iconSrc
          )}
          <FormControl >
            <Input placeholder={placeholder} {...field} {...register(name)} onChange={onChange} value={value} className='pl-8 md:text-[11.5px] text-[11.5px]' />
          </FormControl>
        </div>
      )
    case 'select':
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl >
              <SelectTrigger className='shad-select-trigger'>
              <SelectValue placeholder={props.placeholder}/>
              </SelectTrigger>
            </FormControl>
            <SelectContent className='shad-select-content'>
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      )
      case 'date_picker':
      return (
        <div className="flex ">
          {/* <img
            src={calender}
            height={24}
            width={24}
            alt="user"
            className="ml-2"
          /> */}
          <FormControl>
            <DatePicker
              showTimeSelect={props.showTimeSelect ?? false}
              showTimeSelectOnly
                                    timeIntervals={60}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
              selected={field.value || new Date()}
              onChange={(date) => {
                field.onChange(date)
                if(props.onChange){
                  props.onChange(date)
                }
              }}
              timeInputLabel="Time:"
              // dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
              wrapperClassName="date-picker"
              className='text-[10px] md:text-[14px] text-center border-white ml-4'
            />
          </FormControl>
        </div>
      );

  }
}

const CustomFormField = (props) => {
  const { control, name, label, placeholder, iconSrc, fieldType, onChange } = props
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex-1'>
          {fieldType !== 'checkbox' && label && (
            <FormLabel className='text-[12px]'>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className='shad-error' />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField