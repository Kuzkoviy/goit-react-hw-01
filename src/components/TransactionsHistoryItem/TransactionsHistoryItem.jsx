import css from './TransactionsHistoryItem.module.css'

const TransactionsHistoryItem = ({id, type, amount, currency}) => {
  return (
    <tr key = {id} className={css.item}>
        <td className={css.type}>{type}</td>
        <td className={css.amount}>{amount}</td>
        <td className={css.currency}>{currency}</td>
    </tr>
  )
}

export default TransactionsHistoryItem