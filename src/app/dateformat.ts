import { FormControl } from "@angular/forms";

export class Dateformat extends FormControl {
    setValue(value: string | null, options:any): void {
        console.log(value);
        if(!value){
            super.setValue(this.value, { ...options, emitModelToViewChange: true }) // don't allow further change
            return
        }
        if (value.match(/[^0-9|\/]/gi)) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true }) // don't allow further change
            return
        }
        if (value.length > 5) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true }) // don't allow further change
            return
        }
       
        if(value.length===2 && this.value.length===3){
            super.setValue(value,{...options, emitModelToViewChange:true}) // completely revert back
            return
        }
        if (value.length === 2) {
            super.setValue(value + '/', { ...options, emitModelToViewChange: true })
            return
        }

        
        super.setValue(value,{...options, emitModelToViewChange:true})
    }
}
