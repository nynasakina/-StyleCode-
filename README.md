# StyleCode

StyleCode is a captone project for General Assembly Software Engineering Immersive. Built using the MERN stack, StyleCode 
is a fashion e-commerce website based on the Model View Controller (MVC) Architecture. Product images found solely belongs to [Forever21](https://www.forever21.com).

## Features

- Browse products by category
- Filter products by colour and size
- Search function (*Work in progress*)
- Wish list function (*Work in progress*)

## Tech Stack

This project was built using the following, contributed by using standard Git flow on Github

- React framework 
- Styled Component 
- Axios for API calls
- Express/MongoDB backend stack
- Stripe for payment

StyleCode integrates Stripe to allow for payment with items that are checked out by user. Stripe accepts a request made to its server and returns a URL which displays a checkout page with payment options as well as the items that were checked out earlier. Upon successful payment, user is directed to back to StyleCode with a confirmation message.

![Stripe](https://i.ibb.co/D8qWVqY/Screenshot-2022-05-06-at-3-01-22-PM.png)


## Home Page View

![Home Page](https://i.ibb.co/bWXC3S3/Screenshot-2022-05-06-at-3-04-49-PM.png)
![Home Page](https://i.ibb.co/1XmjWdL/Screenshot-2022-05-06-at-3-00-14-PM.png)

## Products By Category and Details View
![Product Page](https://i.ibb.co/jgPZRhz/Screenshot-2022-05-06-at-3-00-42-PM.png)

## APIs

- [Forever21](https://rapidapi.com/apidojo/api/forever21)
- [Stripe API](https://stripe.com/docs/api)

## API Routes


| Purpose                  | HTTPS VERB |
| ------------------------ | ---------- |
| Display All Products     | GET        |
| Get Products by Id       | GET        |
| Get Products by Category | GET        |
| Create New Products      | POST       |
| Create New Users         | POST       |
| Make Payment             | POST       |


## Known Issues
Cart is empty after page is refreshed.

## Future Works
The following add-on features may be considered to be added in StyleCode app

- User Login and Authentication
- User manage booking
- Search Bar to search all items
- Favourite feature adding favourite items to Wish List
- Super Admin account to add, edit and delete products
