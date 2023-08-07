# Project README - Task for Nova Poshta API Integration

![Project Logo](link_to_logo.png)

## Overview

This project aims to integrate the Nova Poshta API to create a web application
that allows users to track the status of their parcels and view a list of Nova
Poshta branches. The application will be built using React.js and will utilize
TypeScript, Mui, Redux, Redux Toolkit, and Axios to enhance the development
process.

### Functionality Requirements

1. Users can enter a tracking number (TTN) in the input field on the webpage.
2. The application will send a request to the Nova Poshta API to retrieve the
   current status of the parcel's location.
3. The application will display the relevant information about the delivery
   status to the user.
4. Previous TTNs entered by the user will be displayed as a list in the sidebar,
   even after page refresh.
5. Clicking on a TTN from the list will automatically trigger an API request to
   obtain the status and display the relevant information. The TTN will be
   automatically populated in the input field.
6. TTNs entered must be validated for correct formatting, either through
   character-by-character comparison with the required encoding or through
   regular expressions.
7. Users should have the option to clear all previously entered TTNs.
8. If the user enters an incorrect format, a tooltip must be shown upon clicking
   the "Get Delivery Status" button, and the request should not be sent.
9. On the second tab, users can view a list of Nova Poshta branches. The list
   will be fetched from the Nova Poshta API and displayed as per the design
   preferences.

### Technical Dependencies

1. Create a separate Git repository to manage the project's codebase.
2. Publish the Technical Specification (TS) on Git Pages.
3. Divide the project into subtasks and create a separate branch for each task.
   Each branch should contain at least a few commits. For example, the task of
   creating the HTML structure can be on a branch named "create-structure" with
   commits "Add html" and "Add styles."
4. Use React.js for building the application.
5. Utilize TypeScript, Mui, Redux, Redux Toolkit, and Axios in the development
   process.
6. Focus on styling and ensure that the layout is responsive and compatible
   across various browsers. Consider creating a unique and user-friendly design,
   with special attention to the usability on mobile devices. Implement any
   enhancements necessary to hide or improve the interactivity of elements on
   mobile screens.

### Getting Started

To begin development, follow these steps:

1. Clone the repository from Git.
2. Install the required dependencies using `npm install`.
3. Create a branch for each subtask and work on the specific feature.
4. Commit your changes regularly and push them to the respective branches.
5. Test your application locally using Postman or a similar tool to interact
   with the Nova Poshta API.

### Runs the app

`npm start` - Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Contribution Guidelines

If you wish to contribute to the project, please follow these guidelines:

1. Fork the repository on Git.
2. Create a new branch from the `main` branch.
3. Work on your changes and commit regularly.
4. Push your changes to the new branch on your forked repository.
5. Create a pull request from your branch to the `main` branch on the original
   repository.
6. Await review and feedback on your pull request.

Let's build an amazing and user-friendly application together! Happy coding!

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use,
modify, and distribute the code as per the terms of the license.
