
# Getting Started with this project



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



*But it was edited to meet the requirements of the project*



## How to run this project?

### First



Clone the repo

```bash

$ git clone git@github.com:Djanilson/121-frequency.git

```


#### And

In the project directory, you need to install dependencies running on your `bash`:

```bash

$ yarn

```

or

```bash

$ npm i

```



#### After that



Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Or, in local network, your _machine ip_ and same port, like this:

`192.168.0.188:3000`



**To do this** run, on your bash:

```bash

$ yarn start

```

or

```bash

$ npm start

```



#### Go to browser

The app will user your localstorage to keep the Survivors data; And will generate the first fake data, but you can edit all

and...


## App Features:

- You can create a new record using the create button on the main screen;

- When you click on a row in the table, the data for that record will be displayed on the top right card of the main screen;

- Each row in the table has a dropdown with the options:
  - **Mark as infected** - Update the registry as infected;
  - **Edit** - Edit record;
  - **Delete** - Delete record;

- When you click on an item from the _'Last five registrations'_ the information for the item clicked will also be displayed;

- The bottom right graph will show the percentage of infected and uninfected(_healthy_) survivors;


#### That's all! Enjoy!

**_Easter Egg:_**
The frequencies are **121.5 MHz** for civilian, also known as International Air Distress (IAD) or VHF Guard, and 243.0 MHz for military use, also known as Military Air Distress (MAD) or UHF Guard.
[wiki](https://en.wikipedia.org/wiki/Aircraft_emergency_frequency#:~:text=The%20frequencies%20are%20121.5%20MHz,(MAD)%20or%20UHF%20Guard.)


___



##### _If you wanna know more, keep reading..._



###### Witch lib was used?

-  [Ant Design](https://ant.design/) - Design System;

-  [React-redux](https://react-redux.js.org/) - For App State control;

-  [Redux-saga](https://redux-saga.js.org/) - To control actions side effects

-  [Less Loader](https://www.npmjs.com/package/less-loader) - To support theme changes in Ant Desgin;

-  [Prettier](https://prettier.io/docs/en/index.html) - To keep a style guide

-  [Husky](https://github.com/typicode/husky#husky) - To automate lint befor commits




...

###### If you want learn More About React



You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).