Radiant is a webapp application aimed to assist users with the market in financial currencies and stocks. The web application uses NEXT JS as it's frontend and flask as its backend. 

## Features

Some of it's features include:

- Webscraping data with BeautifulSoup
- Google OAuth 2.0 for authentication and authorization 
- Stripe integration for a one time service subscription payment, redirected to stripe's checkout page

## Flask API

Flask was used as the backend python framework. Data was obtained from Yahoo Finance and webscraped `.simpTblRow` to extract all data within its table. As a result, four seperate lists were created:
```
- [_symbol]
- [_name]
- [_price]
- [_change]
```

These were compiled into a dictionary to for which each list was indexed into its respective dictionary, then converted to a JSON object to ensure that the frontend was able to call and extract the information. 

## NEXT JS 

Next JS was used as the frontend javascript framework. The mainpage displays all data that was webscraped by the backend and displays it within three seperate cards.
The header displays the logo, contact, and the login function.

The login function was implemented using Google OAuth 2.0 as its authentication and authorization preferance. Initially just a button that when clicked, checked for its state and called the token to confirm the login and display all user information, but to present a more modern application, the Google service was selected.

The subscribe button, when clicked will direct the user to the Stripe checkouts page. This integration allows the user to make a one time service subscription payment and returns to the web application's homepage. If testing, the card number should be 4242 4242 4242 4242, and then any other number to fill it out. In advance, I did not include the `.env` file, per security reasons. 

The UI was created with tailwind CSS. 

## Getting Started

First, run the development server:

```bash
npm run dev
```

Then, open flask-server folder and run:

```bash
venv\scripts\activate
python server.py
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If there are any further questions, please do not hesitate and contact me. 
