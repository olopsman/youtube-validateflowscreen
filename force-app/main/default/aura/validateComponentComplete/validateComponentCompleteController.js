({
    init: function(component, event, helper) {
        component.set('v.validate', function() {
           var isCompany = component.get('v.isCompany');
           var companyName = component.get('v.companyName');
           var contactPerson = component.get('v.contactPerson');
           var email = component.get('v.email');

           if($A.util.isEmpty(isCompany)) {
               return { isValid: false, errorMessage: 'Do you own a company is required.' };
           } else if(isCompany == 'Yes' && $A.util.isEmpty(companyName)) {
               return { isValid: false, errorMessage: 'Company Name is required.' };
           } else if(isCompany == 'No' && $A.util.isEmpty(contactPerson)) {
               return { isValid: false, errorMessage: 'Contact Person Name is required.' };
           } else if($A.util.isEmpty(email)) {
               return { isValid: false, errorMessage: 'Email is required.' };
           }  else {
               return { isValid: true };
           }
        });
    },
    handleIsCompanyChange: function(component, event, helper) {
        var isCompany = event.getSource().get("v.value");
        component.set("v.isCompany", isCompany);
    }
})