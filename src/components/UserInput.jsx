export default function UserInput({ DataChangeFunction, userInput }) {

    return (
        <section id="user-input">
            {/* ---------------------------------------------- */}
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => DataChangeFunction("initialInvestment", event.target.value)}
                    />
                </p>

                <p>
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) => DataChangeFunction("annualInvestment", event.target.value)}
                    />
                </p>
            </div>

            {/* ---------------------------------------------- */}
            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => DataChangeFunction("expectedReturn", event.target.value)}
                    />
                </p>

                <p>
                    <label htmlFor="duration">Duration</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) => DataChangeFunction("duration", event.target.value)}
                    />
                </p>
            </div>
            <button>Calculate</button>
        </section>
    );
}
