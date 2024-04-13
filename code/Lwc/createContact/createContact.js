import { LightningElement } from 'lwc';
import Con from '@salesforce/schema/contact';
import ACC_ID from '@salesforce/schema/Contact.AccountId';
import Con_Name from '@salesforce/schema/Contact.Name';
import Con_Email from '@salesforce/schema/Contact.Email';
import Con_Phone from '@salesforce/schema/Contact.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refrsh } from 'c/listAccount';

export default class CreateContact extends LightningElement {
    objectApiName= Con;

    fields=[ACC_ID,Con_Name,Con_Phone,Con_Email];
    show=false;


    handleSuccess(event){
        this.show=!this.show;
        const mes=new ShowToastEvent({
            title: 'contact created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(mes);
        this.handleRefreshClick();
    }
    handleRefreshClick() {
        this.dispatchEvent(new CustomEvent('refreshdata'));
    }
    cancelhandler(){
        this.show=!this.show;
    }


}