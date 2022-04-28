import {Validators, createFormValidation} from '@lemoncode/fonk';
import {dayValidator, monthValidator, yearValidator} from './transfer.custom.validators' ;
import { laterDate } from '@lemoncode/fonk-later-date-validator';

const validationSchema =  {
    field : {
        sourceAccount: [
            {
                validator: Validators.required, 
                message: 'Campo requerido',
            },
        ],
        iban: [
            {
                validator: Validators.required, 
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^[A-Za-z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/ },
            },
        ],
        name: [
            {
                validator: Validators.required, 
                message: 'Campo requerido',
            },
        ],
        amount: [
            {
                validator: Validators.required, 
                message: 'Campo requerido',
            },
            
        ],
        concept: [
            {
                validator: Validators.required, 
                message: 'Campo requerido',
            },
        ],
        day: [
            {
                validator: Validators.required, 
                message: 'Campo requerido',
            },
            {
                validator: dayValidator,
    
            },
        ],
        month: [
            {
                validator: Validators.required, 
                message: 'Campo requerido',
            },
            {
                validator: monthValidator,
    
            },
        ],
        year: [
            {
                validator: Validators.required, 
                message: 'Campo requerido',
            },
            {
                validator: yearValidator,
           
            },
        ],

       date: [
            {
                validator: laterDate.validator, 
                customArgs: {  parseStringToDateFn: (value) => new Date(value), date: new Date() },
                message: "La fecha no es correcta",
            },
            
        ],
        email: [
            {
                validator: Validators.required, 
                message: 'Campo requerido',
            },
            {
                validator: Validators.email, 
                message: 'Email no válido',
            },
        ],
    },
};

export const formValidation = createFormValidation(validationSchema);