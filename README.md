# Storefront

- Creating a virtual storefront that allows users to browse product offerings by category, place items in their shopping cart, and check-out when they are ready to make their purchase.

## Setup

- `.evn` requirements (n/a)
- `npm i` - installs all require dependencies
- `npm start` - starts the application on localhost:3000

## Technical Requirements

1. React
2. ES6 Classes
3. Redux Store for
4. Deployed API with MongoDB storage for storing categories and products
5. Superagent or Axios for performing API requests
6. Material UI for layout and styling
7. Test Driven Development using Jest
8. Deployment to a cloud provider (Netlify, Amplify or Github Pages)

## Lab - Application State with Redux

## Phase 1 Application Setup

- Basic React Application
- Redux State Management
- State managed in memory
- Material UI Components & Styling

The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products
- As a user, I want to choose a category and see a list of all available products matching that category
- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence

## Technical Requirements / Notes

And as developers, here are the high level development tasks that address the above end user requirements

- Create a visually appealing site using Material UI
- Use a Redux Store to manage the state of categories and items in the store
- Display a list of categories from state
- When the user selects (clicks on) a category …
  - Identify that category as selected (change of class/display)
  - Show a list of products associated with the category

## UML

![Storefront](./src/assets/images/storefrontUML.PNG)

## Lab: Redux - Combined Reducers

## Phase 2: Shopping Cart

- Add items to a shopping cart
- Update quantities
- Remove items from the cart
- Show the cart in real-time on the UI

The user stories from Phase 1 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

- As a user, I want to choose from products in the list and add them to my shopping cart
- As a user, I want to see the products that I’ve added to my shopping cart so that
- As a user, I want to change the quantity of items I intend to purchase in my shopping cart
- As a user, I want to be able to remove an item from my shopping cart

### Application Flow:

User sees a list of categories
… Chooses a category and sees a list of products
… Clicks the “Add to Cart” button on any product
… Clicks the “Cart” link in the header
… Sees a list of all products in the cart
… Clicks the delete button on an item and sees the item removed
… Changes the quantity selector on an item and sees the cart total change

### Collaboration & Credit

- Danny Castro
