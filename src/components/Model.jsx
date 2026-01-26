import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function Model() {
    const policingArea = <InlineMath math = {`n`}/>
    const currentTime = <InlineMath math = {`t`}/>
    const currentCrime = <InlineMath math = {`j`}/>
    const pastCrime = <InlineMath math = {`i`}/>

    return (

        <div className = "bg-orange p-5 gap-5 grid md:grid-cols-3">
            <div className = "bg-cream p-5 rounded-xl space-3-gap">
                <div>
                    <h1 className = "text-center text-xl font-bold">Probabilisitc rate of crimes in a policing area</h1>
                
                    <BlockMath 
                        math = {
                            '\\lambda_n(t) = \\mu_n + \\sum_{t^j_n \\lt t} \\theta \\omega e^{-\\omega(t - t^j_n)}'
                        }
                    />
                </div>

                <div>
                    <h1 className = "text-center text-lg font-bold">Notations</h1>

                    <ul>
                        <li>{policingArea}: A policing area</li>
                        <li><InlineMath math = {`j`}/>: An event number</li>
                        <li>{currentTime}: The current time</li>
                        <li><InlineMath math = {`t^j_n`}/>: The time when the j-th crime occurred in {policingArea}</li>
                        <li><InlineMath math = {`\\lambda_n(t)`}/>: The probabilistic rate of crimes in {policingArea} at time {currentTime}</li>
                        <li><InlineMath math = {`\\mu_n`}/>: The baseline rate of crimes in {policingArea}</li>
                        <li><InlineMath math = {`\\sum_{t^j_n \\lt t}`}/>: Sum over crimes taking place in {policingArea} before the current time {currentTime}</li>
                        <li><InlineMath math = {`\\theta`}/>: The number of crimes taking place as a result of a crime</li>
                        <li><InlineMath math = {`\\omega`}/>: Rate of temporal decay</li>
                    </ul>
                </div>

                <div>
                    <h1 className = "text-center text-lg font-bold">Explanation</h1>

                    <ul>
                        <li><InlineMath math = {`t - t^j_n`}/>: How long has passed since the j-th crime</li>
                        <li>
                            <InlineMath math = {`e^{-\\omega(t - t^j_n)}`}/>: How quickly each crime's effects fade over time
                            <br/>
                            → Recent crimes make larger contributions, while old crimes make smaller contributions
                        </li>
                        <li>
                            <InlineMath math = {`\\theta \\omega e^{-\\omega(t - t^j_n})`} />: How much a past crime increases future crimes
                            <br/>
                            → The "triggering kernel" modeling near-repeat and contagion effects
                        </li>
                        <li>
                            <InlineMath math = {`\\sum_{t^j_n \\lt t} \\theta \\omega e^{-\\omega(t - t^j_n)}`} />: Sum up the risks caused by past crimes in {policingArea}
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className = "text-center text-lg font-bold">Key takeaway</h1>

                    <p>The probabilistic rate of crimes in {policingArea} at time {currentTime} = The baseline rate of crimes in {policingArea} + The sum of the decaying effects of all past crimes in {policingArea}</p>
                </div>
            </div>

            <div className = "bg-cream p-5 rounded-xl space-3-gap">
                <div>
                    <h1 className = "text-center text-xl font-bold">Probability of a crime taking place <br/> as a result of a past crime vs. on its own</h1>
                
                    <h1 className = "text-center">Probability of being triggered by a past crime</h1>
                    
                    <BlockMath 
                        math = {
                            `p^{ij}_n = \\frac{\\theta \\omega e^{-\\omega(t^i_n - t^j_n)}}{\\lambda_n(t^j_n)}`
                        }
                    />

                    <h1 className = "text-center">Probability of happening on its own</h1>

                    <BlockMath
                        math = {
                            `p^{j}_n = \\frac{\\mu_n}{\\lambda_n(t^j_n)}`
                        }
                    />
                </div>

                <div>
                    <h1 className = "text-center text-lg font-bold">Notations</h1>

                    <ul>
                        <li><InlineMath math = {`p^{ij}_n`}/>: The probability that crime {currentCrime} in {policingArea} is caused by past crime {pastCrime} in {policingArea}</li>
                        <li><InlineMath math = {`p^j_n`}/>: The probability that crime {currentCrime} in {policingArea} takes place on its own</li>
                    </ul>
                </div>

                <div>
                    <h1 className = "text-center text-lg font-bold">Explanation</h1>

                    <ul>
                        <li>
                            <InlineMath math = {`\\theta \\omega e^{-\\omega(t^i_n - t^j_n)}`}/>: How much crime {pastCrime} contributes to crime {currentCrime}
                        <br/>
                            → If crime {pastCrime} takes place shortly before crime {currentCrime}, the contribution is large; if crime {pastCrime} takes place long ago, the contribution is small
                        </li>
                        <li><InlineMath math = {`\\lambda_n(t^j_n)`}/>: The crime rate in {policingArea} when crime {currentCrime} takes place</li>

                    </ul>
                </div>

                <div>
                    <h1 className = "text-center text-lg font-bold">Key takeaway</h1>

                    <ul>
                        <li>
                            Probability of being triggered by past crime {pastCrime}: 
                            <br/>
                            <BlockMath math = {`\\displaystyle\\frac{\\text{Contribution of event } i}{\\text{Crime rate at time of crime } j}`}/>
                        </li>
                        <li>
                            Probability of taking place on its own:
                            <br/>
                            <BlockMath math = {`\\displaystyle\\frac{\\text{Contribution of baseline crime rate}}{\\text{Crime rate at time of crime } j}`}/>
                        </li>
                    </ul>

                </div>
            </div>

            <div className = "bg-cream p-5 rounded-xl space-3-gap">
                <div>
                    <h1 className = "text-center text-xl font-bold">Updated parameters</h1>

                    <BlockMath
                        math = {
                            `\\omega = \\frac{\\sum_n \\sum_{i \\lt j} p^{ij}_n}{\\sum_n \\sum_{i \\lt j} p^{ij}_n (t^j_n - t^i_n)}`
                        }
                    />

                    <BlockMath
                        math = {
                            `\\theta = \\frac{\\sum_n \\sum_{i \\lt j} p^{ij}}{\\sum_n \\sum_j 1}`
                        }
                    />

                    <BlockMath
                        math = {
                            `\\mu = \\frac{\\sum_n \\sum_j p^j_n}{T}`
                        }
                    />
                </div>

                <div>
                    <h1 className = "text-center text-lg font-bold">Notations</h1>

                    <ul>
                        <li><InlineMath math = {`\\sum_n`}/>: Sum over all policing areas</li>
                        <li><InlineMath math = {`\\sum_{i \\lt j}`}/>: Sum over all pairs where crime {pastCrime} happening before crime {currentCrime}</li>
                        <li><InlineMath math = {`T`}/>: Length of observation</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h1 className = "text-center text-lg font-bold">Explanation</h1>

                        <li><InlineMath math = {`\\sum_n \\sum_{i \\lt j} p^{ij}_n`}/>: Sum of the probabilistic rate of triggering across all crime {pastCrime} - crime {currentCrime} pairs in all policing areas</li>
                        <li><InlineMath math = {`\\sum_n \\sum_{i \\lt j} p^{ij}_n (t^j_n - t^i_n)`}/>: The above result multiplied by the time gap between crime {pastCrime} and crime {currentCrime} in all policing areas</li>
                        <li><InlineMath math = {`\\sum_n \\sum_j p^j_n`}/>: Sum of the probabilistic rate of being a background crime over all crimes in all policing areas</li>
                        <li><InlineMath math = {`\\sum_n \\sum_j 1`} />: The total number of crimes in all policing areas</li>
                    </ul>
                </div>

                <div>
                    <h1 className = "text-center text-lg font-bold">Key takeaway</h1>

                    <ul>
                        <li>
                            Rate of temporal decay:
                            <br/>
                            <BlockMath math = {`\\displaystyle{\\frac{\\text{Expected number of crimes triggered}}{\\text{Total triggering time gaps}}}`}/>
                        </li>
                        <li>
                            Baseline crime rate:
                            <br/>
                            <BlockMath math = {`\\displaystyle{\\frac{\\text{Expected number of background crimes}}{\\text{Observation length}}}`}/>
                        </li>
                        <li>
                            Rate of crimes triggered by another crime:
                            <BlockMath math = {`\\displaystyle{\\frac{\\text{Expected number of crimes triggered}}{\\text{Total number of crimes}}}`}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}