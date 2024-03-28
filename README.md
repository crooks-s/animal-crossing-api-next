# Treehouse Project: Display a villager using the Nookipedia API
## Introduction
This is a simple application that was built with [Next.js](https://nextjs.org/) and TailwindCSS. 
<br /> The application currently only has two routes: ```root``` and ```villager```. 
<br /> The ```root``` page presents a basic welcome message and a button that goes to the ```villager``` route and retrieves a random villager from the Nookipedia API at the ```/villagers``` endpoint.

## Running the Project
1. Clone the project.
2. **IMPORTANT**! You will need a [Nookipedia API Key](https://api.nookipedia.com/?pk_campaign=legacy-api-page).
3. Create a ```.env.local``` file in the ```root``` directory.
4. Create a variable using ```NEXT_PUBLIC_NOOKIPEDIA_API_KEY="<your API key>"```. Please note that the variable is assigned to your API key as a ```string```.
5. Using the terminal, run the following while in the root directory:
<br /> - ```npm i```  or  ```npm install``` or ```yarn``` to install the project's dependencies.
<br /> - Run ```npm run dev``` to start the development server.
6. The application will be hosted on [http://localhost:3000/](http://localhost:3000/)

## Tech Stack
Next.js
<br />TailwindCSS

## Process/Learning (to be updated)
Much time on this project was spent reading ```Next.js``` and ```TailwindCSS``` documentation to learn more about both of their capabilities and applying those techniques.

## Improvement
There is much to be improved such as adding a way for the user to go back to the ```root``` route.
<br />Posssibly adding a search function because the endpoint contains 400 villagers.
<br />This would also mean a pagination feature would need to be added to improve performance.

## Author
Sean Crooks

## Contributions
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Treehouse provided a simple guideline, some images/SVGs, and some hexidecimal color codes to use for the project.
