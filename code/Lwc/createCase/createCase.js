import { LightningElement } from 'lwc';
import Case from '@salesforce/schema/Case';
import account from '@salesforce/schema/Case.AccountId';
import Status from '@salesforce/schema/Case.Status';
import CaseOrigin from '@salesforce/schema/Case.Origin';
import Subject from '@salesforce/schema/Case.Subject'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateCase extends LightningElement {
    objectApiName= Case;
    fields=[account,Subject,CaseOrigin,Status];
    show=false;


    handleSuccess(event){
        this.show=!this.show;
        const mes=new ShowToastEvent({
            title: 'Case created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'Dismissible',
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