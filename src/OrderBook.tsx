import { TOrderBookStream } from './order-book-stream'

import '../src/styles/OrderBook.css';


const BOOK = "book__";

const OrderBook: React.FC<TOrderBookStream> = ( { buy, sell } ) => {

  let totalBuy: number = 0.00;
  let totalSell: number = 0.00;

  buy.forEach( order => {
    totalBuy += parseFloat( order.price ) * parseFloat( order.amount );
  } );

  sell.forEach( order => {
    totalSell += parseFloat( order.price ) * parseFloat( order.amount );
  } );

  return (
    <div className={`${BOOK}container`}>
      <div className={`${BOOK}content-container`}>
        <h2>Order Book</h2>
        <div className={`${BOOK}trans-container`}>
          <h3 className={`${BOOK}title`}>Buy</h3>
          <div className={`${BOOK}table-titles`}>
            <h4>PRICE (USD)</h4>
            <h4>AMT (TBTC)</h4>
            <h4>VOL (USD)</h4>
          </div>
          {buy.map( ( buyOrder ) => (
            <div className={`${BOOK}price-amt-vol`} style={{background: `linear-gradient(to right, #14202c ${100 - (( parseFloat( buyOrder.price ) * parseFloat( buyOrder.amount ) ) / totalBuy * 100)}%, maroon ${( parseFloat( buyOrder.price ) * parseFloat( buyOrder.amount ) ) / totalBuy * 100}%)`}}>
              <p className={'buy'}>{parseFloat(buyOrder.price).toFixed(2)}</p>
              <p>{buyOrder.amount}</p>
              <p>{( parseFloat( buyOrder.price ) * parseFloat( buyOrder.amount ) ).toFixed( 3 )}</p>
            </div>
          ) )}
        </div>

        <div className={`${BOOK}trans-container`}>
          <h3 className={`${BOOK}title`}>Sell</h3>
          <div className={`${BOOK}table-titles`}>
            <h4>PRICE (USD)</h4>
            <h4>AMT (TBTC)</h4>
            <h4>VOL (USD)</h4>
          </div>
          {sell.map( ( sellOrder ) => (
            <div className={`${BOOK}price-amt-vol`} style={
              { background: `linear-gradient(to right, #14202c ${100 - (( parseFloat( sellOrder.price ) * parseFloat( sellOrder.amount ) ) / totalSell * 100)}%, #397169 ${( parseFloat( sellOrder.price ) * parseFloat( sellOrder.amount ) ) / totalSell * 100}%)` }}>
              <p className="sell">{parseFloat(sellOrder.price).toFixed(2)}</p>
              <p>{sellOrder.amount}</p>
              <p>{( parseFloat( sellOrder.price ) * parseFloat( sellOrder.amount ) ).toFixed( 3 )}</p>
            </div>
          ) )}
        </div>
      </div>
    </div>
  );
};

export default OrderBook
