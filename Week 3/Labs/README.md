### Hands-on Lab - React Redux

Estimated Time Needed: 40 mins

In this lab, you will be building an increment counter using Redux.

Objective:
After completing this lab, you will be able to use state management to increment the counter using Redux. Redux library has all that it requires for store management while react-redux binds react and redux libraries together.

The store management with redux has 3 main components:

Actions - are blocks of information that send data from your application to your store. Actions must have a type property that indicates the type of action being performed.

Reducers -Reducers specify how the application’s state changes in response to actions sent to the store.

Store -The Store is the object that brings the action and reducer together. The store has the following responsibilities: Holds application state; Allows access to state; Allows state to be updated via dispatch(action);
