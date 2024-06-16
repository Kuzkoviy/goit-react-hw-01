
import TransactionsHistoryItem from "../TransactionsHistoryItem/TransactionsHistoryItem"
import css from './TransactionsHistory.module.css'
function TransactionsHistory({items}) {
  return (
    <table className={css.transactions}>
  <thead className={css.header}>
    <tr>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => {
        return(
            <TransactionsHistoryItem key={id} type={type} amount={amount} currency={currency}/>
        );
    })}
  </tbody>
</table>

  )
}

export default TransactionsHistory