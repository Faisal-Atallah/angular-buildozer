import { AbstractControl, ValidatorFn } from '@angular/forms';
import { AppUtils } from '@core/helpers/utils';
const _window = window as any;

/**
 *
 * @param id The id refer to input id
 */
export function PhoneNumberShouldBeAssociatedWithCountry(id: string): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
      const input = document.getElementById(id);
      if (input) {
         const inst = _window.intlTelInputGlobals.getInstance(input);
         if (inst) {
            return AppUtils.not(inst.isValidNumber()) ? { not_associated: true } : null;
         }
      }
      return null;
   };
}
