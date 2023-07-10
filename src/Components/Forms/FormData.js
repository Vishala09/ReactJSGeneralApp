export function getFormQuestions(){
let Questions = [
    {
      section: 1,
      items: [
        {
            label: 'Please fill the First Name',
            type: 'text',
            key: 'FirstName'
        },
        {
            label: 'Please fill the Second Name',
            type: 'text',
            key: 'SecondName'
        },
        {
            label: 'Select the desired product',
            type: 'select',
            key: 'Desired Product',
            options: []
        },
        {
            label: 'Choose gender',
            type: 'radio',
            key: 'Gender',
            options: [{'name':'Female','id':1},{'name':'Male','id':2},{'name':'Prefer not to say','id':3}]
        },
        {
          label: 'Select the date',
          type: 'date',
          key: 'Date',
          options: []
      },
        
      ]
    },
    {
      section: 2,
      items: [
        {
            label: 'Please fill your occupation',
            type: 'text',
            key: 'Occupation'
        },
        {
            label: 'Please fill age (Only Number allowed)',
            type: 'number',
            key: 'Age'
        },
        {
            label: 'Select all that apply',
            type: 'checkbox',
            key: 'Type of device',
            options: [{'name':'Desktop','id':1},{'name':'Tablet','id':2},{'name':'Mobile','id':3}]
        },
        {
            label: 'Choose Origin',
            type: 'radio',
            key: 'Origin',
            options: [{'name':'Asian','id':1},{'name':'American','id':2},{'name':'African','id':3}]
        },
        {
          label: 'Select the password',
          type: 'password',
          key: 'Password'
        }  
      ]
    },
    {
      section: 3,
      items: [
        {
            label: 'Please fill your location',
            type: 'text',
            key: 'Location'
        },
        {
            label: 'Please tell us about you in detail',
            type: 'textarea',
            key: 'Detail'
        },
        {
            label: 'Select your preferred mode',
            type: 'select',
            key: 'Type of Mode',
            options: [{'title':'Online','id':1},{'title':'Offline','id':2}]
        },
        {
            label: 'Native Language/Mother tongue',
            type: 'radio',
            key: 'Native Language',
            options: [{'name':'English','id':1},{'name':'Spanish','id':2},{'name':'French','id':3}]
        },
        {
          label: 'Select all that apply',
          type: 'checkbox',
          key: 'Location Preferrence',
          options: [{'name':'Hybrid','id':1},{'name':'Remote','id':2},{'name':'Onsite','id':3}]
        },
      ]
    }
  ]
    return Questions;
}