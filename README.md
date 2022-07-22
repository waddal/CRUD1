# CRS Consulting - Test Project

## Directions:

Using Material UI version 1 and React create-react-app, 
create a Contacts App where you can read, add, edit or delete contacts.
It can be a simple list with buttons to add, edit, delete each contact.
The contact fields are name, phone, email.
 
1. You must use Redux.
2. You must use React Hooks.
3. You must use Material UI version 1. 
(Style it properly the best you can using Material UI standards and components, like Table, List/ListItem, Material UI Icons).

[Styling examples]
https://www.creative-tim.com/product/material-dashboard-material-ui-v4 
https://demos.creative-tim.com/material-dashboard-material-ui-v4/?_ga=2.194807661.1746088875.1655141341-287422235.1655141341#/admin/dashboard 
 
## API 

Use the following API to make this React CRUD app :
 
GET https://tester.crs-consulting.com/api/entries - gets all contacts
 
GET https://tester.crs-consulting.com/api/entry?id=<contact id> - gets one contact
 
POST https://tester.crs-consulting.com/api/entry - creates contact with { name, email, phone } body data
  
PUT https://tester.crs-consulting.com/api/entry - { name, email, phone, id } data
 
DELETE https://tester.crs-consulting.com/api/entry?id=>contact id>

