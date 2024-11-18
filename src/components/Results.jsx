import { calculateInvestmentResults, formatter } from "../util/investment.js"

export default function Results({ userInput }) {
    let result = calculateInvestmentResults(userInput)
    console.log(result)

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest</th>
                    <th>Total Interest</th>
                    {/* <th>Invested Capital</th> */}

                </tr>
            </thead>
            <tbody>
                {result.map((yeardata) => {
                    return <tr key={yeardata.year}>
                        <td>{yeardata.year}</td>
                        <td>{formatter.format(yeardata.interest)}</td>
                        <td>{formatter.format(yeardata.valueEndOfYear)}</td>
                        <td>{formatter.format(yeardata.annualInvestment)}</td>
                        <td>

                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}


// {
//     Array.isArray(result) ? (
//         result.map((res, index) => (
//             <li key={index}>
//                 Year: {res.year}, Interest: {res.interest}, Value: {res.valueEndOfYear}, Annual Investment: {res.annualInvestment}
//             </li>
//         ))
//     ) : (
//     <li>Invalid result data</li>
// )
// }