import { LightningElement, wire,track  } from 'lwc';
import getlistaccount from '@salesforce/apex/ListAccount.getListAccount';
import ACCOUNT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import Phone from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
export default class ListAccount extends LightningElement {
     Account;
     reAccount;
    @wire(getlistaccount) 
    Accont(result){
        this.reAccount=result;
        if(result.data){
            this.Account=result.data;
    
        }else{
            console.error(result.error);
        }
    };
 ///Create the Account
     Show=false;
     viewall=false;
     objectApiName=ACCOUNT;
    fields = [NAME_FIELD, INDUSTRY_FIELD,REVENUE_FIELD,Phone ]; 
    showCase=false;
    handleSuccess(event) {
        this.Show=!this.Show;
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        
        this.dispatchEvent(evt);
       this.handleRefreshData();
    }
     
    
    handleRefreshData() {
        refreshApex(this.reAccount);
    }


    cancelhandler(){
        this.Show=!this.Show;
    }
    onHandler(){
        this.Show=!this.Show;
    }

    ///view more important
    viewhandleClick(){
        this.viewall=!this.viewall;
      
    }
    activeSection =3 ;
    handleToggleSection(event) {
        this.activeSection = event.detail.openSections.length > 0 ? event.detail.openSections[0] : '';
    }

    onHandler2(){
        this.showCase=!this.showCase
    }
     ///Create the opportunity
    showOpp
    onHandlerOPP(){
        this.showOpp=!this.showOpp
    }


    //create the Contact
    ShowCon=false;
    onHandlerCon(){
        this.ShowCon=!this.ShowCon
 
    }


}