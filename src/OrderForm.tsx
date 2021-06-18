import React, { useState } from 'react'
import { TOrder, TSide } from './order-book-stream'

import '../src/styles/OrderForm.css';


const FORM = "form__";

export type TOrderForm = {
  submitOrder: (side: TSide, { price, amount }: TOrder) => void
}

type TOrderFormData = {
  side: TSide
} & TOrder

const initialFormData: TOrderFormData = {
  side: 'buy',
  price: '',
  amount: '',
}

const OrderForm: React.FC<TOrderForm> = ({ submitOrder }) => {
  const [formData, setFormData] = useState<TOrderFormData>(initialFormData)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    })
  }

  return (
    <div className={`${FORM}container`}>
      <form
        className={`${FORM}form`}
        onSubmit={(event) => {
          event.preventDefault()
          console.log('formData', formData );
          submitOrder(formData.side, {
            price: formData.price,
            amount: formData.amount,
          })
        }}
      >
        <select name="side" onChange={handleChange}>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <input className={`${FORM}input`} name="price" type="float" onChange={handleChange} placeholder="Price" />
        <input className={`${FORM}input`} name="amount" type="float" onChange={handleChange} placeholder="Amount" />
        <button className={`${FORM}button`}>Submit</button>
      </form>
    </div>
  )
}

export default OrderForm