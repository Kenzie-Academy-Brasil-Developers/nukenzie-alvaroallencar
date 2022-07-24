import "./TotalMoney.css";

const TotalMoney = ({ listTransactions }) => {
  const totalBalance = listTransactions.reduce(
    (acc, currentValue) => acc + currentValue.value,
    0
  );
  return listTransactions.length > 0 ? (
    <div className="totalBalance">
      <p className="totalBalanceTitle">Saldo total:</p>
      <p className="totalBalanceValue">{`$ ${totalBalance.toFixed(2)}`}</p>
    </div>
  ) : (
    <></>
  );
};

export default TotalMoney;
