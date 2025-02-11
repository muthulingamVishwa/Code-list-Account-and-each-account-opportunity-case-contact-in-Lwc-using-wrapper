# List Account and Each Account Opportunity, Cases and Contacts

### This component allows users to seamlessly create new accounts, opportunities, cases, contacts, and view created accounts. In each account, we can see the associated opportunities, cases, and contacts.

## Code
```jsx
public with sharing class ListAccount { 

    @AuraEnabled(cacheable=true)
    
     public static List<AccountWrapper1> getListAccount(){
     
        List<Account> accounts =[SELECT Id, Name, Industry, Phone,
        
        (SELECT Id, Name, Amount, StageName FROM Opportunities),
        
        (SELECT Id, Name, Email, Phone FROM Contacts),
        
        (SELECT Id,CaseNumber,Status,Subject FROM Cases)
        
         FROM Account];
         
        List<AccountWrapper1> AccountWrappers1 = New List<AccountWrapper1>();
        
        for(Account ac:Accounts){
            AccountWrapper1 wrapper1= new AccountWrapper1();
            wrapper1.account=ac;
            wrapper1.opportunities=ac.Opportunities;
            wrapper1.cases=ac.Cases;
            wrapper1.Contacts=ac.Contacts;
            AccountWrappers1.add(wrapper1);

        }
        return AccountWrappers1;
     }

     public class AccountWrapper1{
        @AuraEnabled public Account account;
        @AuraEnabled public List<Opportunity> opportunities;
        @AuraEnabled public List<case> cases;
        @AuraEnabled public List<Contact> Contacts;
     }
}
```
[https://github.com/muthulingamVishwa/Code-list-Account-and-each-account-opportunity-case-contact-in-Lwc-using-wrapper/assets/151023895/9e21d556-17ea-4acf-bf98-d3961fb24322](https://github.com/muthulingamVishwa/Code-list-Account-and-each-account-opportunity-case-contact-in-Lwc-using-wrapper/assets/151023895/69d20744-e593-4eb1-b2bf-3fe35e3c6f64)

