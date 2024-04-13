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
