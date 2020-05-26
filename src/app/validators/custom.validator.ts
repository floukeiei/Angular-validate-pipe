import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validateName(control: AbstractControl): ValidationErrors {
    if (/[0-9]/.test(control.value)) {
        return { haveNum: true};
    }
    return null;
}
