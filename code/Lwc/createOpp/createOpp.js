import { LightningElement } from 'lwc';
import OPP from '@salesforce/schema/Opportunity';
import OPP_Name from '@salesforce/schema/Opportunity.Name';
import OPP_StageName from '@salesforce/schema/Opportunity.StageName';
import OPP_Amount from '@salesforce/schema/Opportunity.Amount';
import OPP_C from '@salesforce/schema/Opportunity.CloseDate';
import ACC_ID from '@salesforce/schema/Opportunity.AccountId';

import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class CreateOpp extends LightningElement {
    objectApiName= OPP;
    fields=[OPP_Name,OPP_Amount,OPP_StageName,OPP_C,ACC_ID];
    show=false;


    handleSuccess(event){
        this.show=!this.show;
        const mes=new ShowToastEvent({
            title: 'Opportunity created',
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