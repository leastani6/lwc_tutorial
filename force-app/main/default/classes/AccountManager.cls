public with sharing class AccountManager {
  
  
    // @AuraEnabled(cacheable=true)
    // public static List<Account> getAccounts(){
    //   return [SELECT Id, Name, Phone FROM Account Limit 10];
    // }
    @AuraEnabled
    public static List<Account> getAccounts(Integer numberOfRecords){
      return [SELECT Id, Name, Phone FROM Account Limit :numberOfRecords];
    }
}
