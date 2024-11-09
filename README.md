# React-Native SmartHealth
#### React-Native powered centralized electronic health record system, that effectively creates, modifies and stores patient data. with an integrated and robust database system that that allows for the the retrieval and modification of files, our system clearly address issues of misplaced or lost files, delayed and less accurate diagnosis, and overall improves the inefficiency and effectiveness of the health care.

## UI Preview:
<img width="20%" align="left" src="https://drive.google.com/thumbnail?id=1dTQaAUsLLltTGoFa04Xr2taT7SGppei2&sz=w1000" />
<img width="20%" align="left" src="https://drive.google.com/thumbnail?id=1sMBKuISYgNdrWL1o2sQoAxXch_Ty4R_y&sz=w1000"/> 
<img width="20%" align="left" src="https://drive.google.com/thumbnail?id=1MRdlSWrGOMot-nwfheVZqOcrnPjnCMdh&sz=w1000"/>
<img width="20%"  src="https://drive.google.com/thumbnail?id=1CgMIMVN_-zoWtQfwF4jkKmfNrewoqgG5&sz=w1000"/>
<br/>


## About the project:
This application was bootstrapped with [Create Expo App](https://docs.expo.dev/more/create-expo/) as a base.
<br/>

#### The following Technologies were used:
<img align="left" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img align="left" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
<img  src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=%ffcc32"/>
<ul>
  <li>React Custom Hooks</li>
  <li>React Context</li>
  <li>React Styled Components</li>
</ul>
<br/>

## System Architecture:
<img width="100%" align="left" src="https://drive.google.com/thumbnail?id=1XeOh0Bo5IEUhhBHAOXi_LE0CBT1Kh38m&sz=w1000"/>
<br/>

## System Testing:
###### Unit tested with React Native Testing Library and Jest due to their powerful features, which fit for the development of React Native applications. Our testing strategy concentrates on two points: business logic and complex components. For the business logics, we concentrate our tests on functionalities like form validation, manipulation of data, and calculations. Under the complex components, we test those that also contain complicated logic such as conditional rendering and state management.

## The User Interface:
###### We have built the following pages within this application: sign in, sign up, verify, reset-password, profile, pettings,homepage and more. There different pages, some using protected routes with auth listeners. We used React native ui library (just a design pattern) to build  components. The styling is all handled via StyleSheet components. Using StyleSheet components made our actual dumb components really easy to test.

## Data layer and Business Logic:
###### Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

