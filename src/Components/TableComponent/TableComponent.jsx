import style from "./TableComponent.module.css";

export default function TableComponent(props) {

  const formatter = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD',
    minimumFractionDigits:2,
    maximumFractionDigits:2
  })
  const yearlyData = []; // per-year results

  let currentSavings = +props.values["currentSavings"]; // feel free to change the shape of this input object!
  const yearlyContribution = +props.values["yearlySavings"]; // as mentioned: feel free to change the shape...
  const expectedReturn = +props.values["expectedInterest"] / 100;
  const duration = +props.values["investmentDuration"];

  // The below code calculates yearly results (total savings, interest etc)
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      // feel free to change the shape of the data pushed to the array!
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }

  return (
    <div>
      {yearlyData.length <=0 ? <h2 style={{'text-align':'center'}}>NO DATA HAS BEEN CALCULATED YET!</h2>:
            <table className={style.result}>
            <thead>
              <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
              </tr>
            </thead>
            <tbody>
              {
              yearlyData.map((x, y) => { 
                return (
                  <tr key={y}>
                    <td>{x.year}</td>
                    <td>{formatter.format(x.savingsEndOfYear)}</td>
                    <td>{formatter.format(x.yearlyInterest)}</td>
                    <td>{formatter.format(x.savingsEndOfYear - props.values.currentSavings - x.yearlyContribution * x.year)}</td>
                    <td>{+(props.values.currentSavings) + (x.yearlyContribution * x.year)}</td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
      }

    </div>
    
  );
}
