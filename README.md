<br>
This repo contains a basic e-commerce application built with React. The application allows users to authenticate, browse products, add them to a shopping cart, and proceed to checkout.

<p align="center">
  <img src="public/imgs/home0.png" width="550" title="home" alt="Home">
  <img src="public/imgs/home01.png" width="550" title="home" alt="Home">
  <img src="public/imgs/home02.png" width="550" title="home" alt="Home">
  <img src="public/imgs/home1.png" width="550" title="home" alt="Home">
  <img src="public/imgs/home20.png" width="550" title="home" alt="Home">
</p>

<br><br>

# Give a Star! ⭐️


# Setup Firebase

1. Before clone the repo you need to create a cloud firestore database
2. Go to [firebase console](https://console.firebase.google.com/u/1/)
3. Click create or add project button and follow steps
4. After project created, add an web app to your project
5. Select Firestore Database under the Build dropdown on the left menu
6. Click create database button and follow the steps
7. Select Rules tab
8. Copy and paste following code

   ```
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
       // Products
       match /products/{product} {
   	      allow read, create;
       }
     // Users
     match /users/{userId} {
       allow create: if request.auth != null;
   	    allow read, update: if request.auth != null && request.auth.uid == userId;
     } } }
   ```

9. Click publish button.
10. Select Authentication under the Build dropdown on the left menu
11. Click Get Started button
12. Click Sign-in method tab and then select email option
13. Enable the first switch(Email/Password)
14. Save and click Add new provider button
15. Follow same steps for gmail

# Getting Started

1. Clone the repo:

`git clone https://github.com/Chamber613/Modern_eCommerce_React.git`


2. instal dependencies:

`npm install`

3. Create .env file in where package.json placed:

   - To find your app data go to firebase console open your project
   - Click the gear icon near Project Overview button on top left
   - Select project settings
   - You fill find your app data below the incoming page

```
  REACT_APP_FIREBASE_APP_ID=TYPE YOUR VALUE
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=TYPE YOUR VALUE
  REACT_APP_FIREBASE_STORAGE_BUCKET=TYPE YOUR VALUE
  REACT_APP_FIREBASE_PROJECT_ID=TYPE YOUR VALUE
  REACT_APP_FIREBASE_AUTH_DOMAIN=TYPE YOUR VALUE
  REACT_APP_FIREBASE_API_KEY=TYPE YOUR VALUE
```

4. Initialize products

   - Checkout to branch react-e-commerce-initialize-products

   - Start project with command `npm start`

   - Go to components/InitializeProducts directory

   - Inside addProducts function set image urls for each primary category

     ```
       // Add your image URL's here
       const men = "";
       const women = "";
       const kids = "";
     ```

   - Open http://localhost:3000/ in your browser
   - Click **Add Products** button
   - After products added checkout to main branch - if something went wrong let me know.

5. Build project:

   `npm run build`

6. run tests:

   `npm run test`

# Features

- Responsive, mobile first
- Product Carousel
- Product listing and detail pages
- Filtering products by categories
- Remember filtered url
- Shopping cart functionality
- Add, remove and show favorite products
- Checkout process
- User authentication and authorization with Gmail and email
- Form management with formik and yup

# Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - A frontend tool for building web applications
- [TypeScript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript
- [Redux / Redux toolkit](https://redux-toolkit.js.org/) - A predictable state container for JavaScript apps
- [Firebase](https://firebase.google.com/) - A platform for building web and mobile apps
- [Material UI](https://mui.com/) - A popular React UI framework
- [Formik](https://formik.org/) - A library for managing the state and validation of forms
- [Formik Material-UI](https://stackworx.github.io/formik-mui/) - A set of Material-UI form controls built with Formik
- [Yup](https://github.com/jquense/yup) - A library for writing validation schemas
- [Vitest](https://vitest.dev/) - A Vite-native testing framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Testing framework for React

# Credits

Coded by Chamber(https://github.com/Chamber613/Chamber613)
Designed by Malcolm
