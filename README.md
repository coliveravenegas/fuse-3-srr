# FuseFinance Frontend Interview

### Exercise: `Table` component and TypeScript

Level: Senior React Developer

Skills to evaluate:

- Component design patterns
- Code scalability, maintenance
- Ability to create a reusable component
- Knowlegde in TypeScript, Generic Typing and Dynamic Typing

Goals:

- Create an app to match designs:

  <img src="https://cdn.fusefinance.com/interview/interview-wireframe.png"/>

- Create a production ready `Table` component, with the following signature:

  ```javascript
  interface TableProps {
      isEdit: any;
      onChangeMode: any;
      onSave: any;
      data: any;
      isLoading: any;
      // hint: not discussable
      cellProps: {
          onChange: any;
          onBlur: any;
          name: string;
      }
      [otherProps]
  }

  ```

- Notes:
- 'any' types should be properly typed
- otherProps will come from your design
- 'cellProps' is a hint type, this should be propagated in the render cell to validate the onChange/onBlur/name logic used by formik

Acceptance criteria:

1. 'Table' component should be a flexible component to be used not only for this scenario (this exercise is just a test case)

2. 'Table' component should allow two modes:

   - Read

       <img src="https://cdn.fusefinance.com/interview/table-readonly.png"/>

   - Edit

       <img src="https://cdn.fusefinance.com/interview/table-edit.png"/>

3. All code should be typed including the api functions

4. 'data' prop should accept two types of data structure: object and arrays

5. The form state should be managed via formik with the following schema validation:

   - title: required
   - body: required, string
   - name: required, min characters 2
   - username: required, at least one symbol !@#$%^
   - email: required, valid email

6. 'Save' button should be disabled if the form is not valid

7. User should be able to select post to read: 1 - 10

8. Bonus: add 'isLoading' logic

9. Bonus: please match desing as possible, you can use any framework you like to match designs but not to build the 'Table' component

Notes:

- Code presented in this `codesandbox` is a template and might have mistakes on purpose, please fix them if is necessary.
- Feel free to install any extra library you might need. 'Table' component shouldn't use external deps
- 'Save' process is mocked and is out the scope for this interview, so please, do not spend time calling any other endpoint, calling the mock functions is enough.
- Please feel free to change anything you want without going against constrains listed above.

By: Fuse
