from flask import Flask
import requests
from bs4 import BeautifulSoup
import json
import yfinance as yf
import plotly.graph_objs as go
import plotly.express as px

app = Flask(__name__)


@app.route("/crypto")
def crypto():
    url = "https://ca.finance.yahoo.com/cryptocurrencies"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    crypto_symbol = []
    crypto_name = []
    crypto_price = []
    crypto_change = []

    count = 0

    for item in soup.select('.simpTblRow'):
        symbol = item.select('[aria-label=Symbol]')[0].get_text()
        name = item.select('[aria-label=Name]')[0].get_text()
        price = item.select('[aria-label*=Price]')[0].get_text()
        change = item.select('[aria-label="% Change"]')[0].get_text()

        count += 1
        crypto_symbol.append(symbol)
        crypto_name.append(name)
        crypto_price.append(price)
        crypto_change.append(change)

        if count == 30:
            break

    dic = {}

    for index in range(len(crypto_symbol)):
        dic[index] = [(crypto_symbol[index]), crypto_name[index],
                      crypto_price[index], crypto_change[index]]

    tool = dict(dic)
    return json.dumps(tool)


@app.route("/stock_gains")
def stock_gains():
    url = "https://ca.finance.yahoo.com/gainers"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    gainer_symbol = []
    gainer_name = []
    gainer_price = []
    gainer_change = []

    count = 0

    for item in soup.select('.simpTblRow'):
        symbol = item.select('[aria-label=Symbol]')[0].get_text()
        name = item.select('[aria-label=Name]')[0].get_text()
        price = item.select('[aria-label*=Price]')[0].get_text()
        change = item.select('[aria-label="% Change"]')[0].get_text()

        count += 1
        gainer_symbol.append(symbol)
        gainer_name.append(name)
        gainer_price.append(price)
        gainer_change.append(change)

        if count == 10:
            break

    dic = {}

    for index in range(len(gainer_symbol)):
        dic[index] = [(gainer_symbol[index]), gainer_name[index],
                      gainer_price[index], gainer_change[index]]

    dataset = dict(dic)
    return json.dumps(dataset)


@app.route("/stock_loss")
def stock_loss():
    url = "https://ca.finance.yahoo.com/losers"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    losers_symbol = []
    losers_name = []
    losers_price = []
    losers_change = []

    count = 0

    for item in soup.select('.simpTblRow'):
        symbol = item.select('[aria-label=Symbol]')[0].get_text()
        name = item.select('[aria-label=Name]')[0].get_text()
        price = item.select('[aria-label*=Price]')[0].get_text()
        change = item.select('[aria-label="% Change"]')[0].get_text()

        count += 1
        losers_symbol.append(symbol)
        losers_name.append(name)
        losers_price.append(price)
        losers_change.append(change)

        if count == 10:
            break

    dic = {}

    for index in range(len(losers_symbol)):
        dic[index] = [(losers_symbol[index]), losers_name[index],
                      losers_price[index], losers_change[index]]

    stockLoss = dict(dic)
    return json.dumps(stockLoss)


@app.route("/simGraph")
def simGraph():
    NAME = 'LRC-CAD'

    data = yf.download(tickers=NAME, period='24h', interval='30m')

    fig = go.Figure(data=go.Candlestick(
        x=data.index,
        open=data['Open'],
        high=data['High'],
        low=data['Low'],
        close=data['Close'],
    ))

    layout = str(fig.to_dict())
    return layout


if __name__ == "__main__":
    app.run(debug=True)
