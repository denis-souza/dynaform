# Dynaform

This plugin is to create a form with dynamic fields.

Installation: include the `dynaform.js` file in your main file.

Setup configs:
```
  options = {
   'Token' 62bb61431348e22850828a5829c4373faafe29c1 '
   'Secret' '51a266c2844ccd5cac83d88de88d82d05358aa51'
   'Fields': {
     'State': [ 'PR', 'SC', 'SP', 'RS'],
     'Level': [ 'Beginner', 'Intermediate', 'Advanced', 'Ninja']
   }
  }
```

Statup form: 
- HTML: `<div id="integration-form"></div>`
- JS: `$('#integration-form').dynaform(options);`
