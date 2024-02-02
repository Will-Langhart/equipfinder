# Introduction

## EquipFinder. - A React Next Rental and Listing Template
## AWS Amplify

This template built with React, NextJS, TypeScript, Styled-Components, HeadlessUI, TailwindCSS, Google Map API, & AntDesign. It's a very easy to use template, comes with ready made beautiful components, those helps you to build your amazing react next js application.

#### Demo Link:

- https://tripfinder-boat.vercel.app/
- https://tripfinder-hotel.vercel.app/

#### Support Link: https://redqsupport.ticksy.com/

<br>

# Getting Started

Clone the repo. Make sure you have the AWS Amplify CLI

<br>

## Installation

Make sure you have Node & Yarn installed in your system. Recommended node version >=v16.17.0 and yarn v1.21.1. You check your ones by running these commands-

```
node -v

yarn -v
```

If it's not installed in your system then please install them by checking official documentation of,

1. https://nodejs.org/en/
2. https://yarnpkg.com/lang/en/docs/install/


<br/>

## Configuration

### Equip

Add your .env.local file with the google API Key

```
REACT_APP_GOOGLE_MAP_API_KEY=https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_API_KEY&libraries=geometry,drawing,places
```

### eqiup Next

```
N / A
```

You can add `http://localhost:3001/` as your NEXT_PUBLIC_SERVER_API endpoint.


## Start the project

After all the configurations, Install Package dependency by running below command at the root directory `rentquick` to get started with the project,

```
yarn
```

For starting **development server** run the below command at the root directory
For equip you need to run,

```
yarn start:eqiup
```


For starting **production server** run the below command at the root directory
For equip you need to run,

```
yarn build:equip
```
