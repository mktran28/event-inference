import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function Model() {
    const policingArea = <InlineMath math = {`n`}/>
    const currentTime = <InlineMath math = {`t`}/>
    const currentCrime = <InlineMath math = {`j`}/>
    const pastCrime = <InlineMath math = {`i`}/>

    return (
        <div className = "bg-orange p-3">
            <h1 className = "text-5xl text-center font-amaticsc font-bold text-cream">Model</h1>

            <div className = "p-5 gap-5 grid md:grid-cols-3">
                <div className = "bg-cream p-5 rounded-xl space-3-gap">
                    <div>
                        <h1 className = "text-center text-xl font-bold">Identify Crime Hotspots</h1>

                        <h1 className = "text-center">Probabilisitc rate of crimes in a policing area</h1>
                    
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
                            <li><InlineMath math = {`j`}/>: Index of a crime in {policingArea}</li>
                            <li>{currentTime}: The current time</li>
                            <li><InlineMath math = {`t^j_n`}/>: The time when the j-th crime occurred in {policingArea}</li>
                            <li><InlineMath math = {`\\lambda_n(t)`}/>: The probabilistic rate of crimes in {policingArea} at time {currentTime}</li>
                            <li><InlineMath math = {`\\mu_n`}/>: The baseline rate of crimes in {policingArea}</li>
                            <li><InlineMath math = {`\\sum_{t^j_n \\lt t}`}/>: Sum over crimes occurring in {policingArea} before the current time {currentTime}</li>
                            <li><InlineMath math = {`\\theta`}/>: The average expected number of future crimes triggered by other crimes</li>
                            <li><InlineMath math = {`\\omega`}/>: Rate of temporal decay</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className = "text-center text-lg font-bold">Explanation</h1>

                        <ul>
                            <li><InlineMath math = {`t - t^j_n`}/>: How long has passed since the j-th crime</li>
                            <li>
                                <InlineMath math = {`e^{-\\omega(t - t^j_n)}`}/>: How the effect of a crime fades over time
                                <br/>
                                → Recent crimes make larger contributions, while old crimes make smaller contributions
                            </li>
                            <li>
                                <InlineMath math = {`\\theta \\omega e^{-\\omega(t - t^j_n})`} />: How much a past crime increases future crimes
                                <br/>
                                → The "triggering kernel" modeling near-repeat and contagion effects
                            </li>
                            <li>
                                <InlineMath math = {`\\sum_{t^j_n \\lt t} \\theta \\omega e^{-\\omega(t - t^j_n)}`} />: Sum up the risks triggered by past crimes in {policingArea}
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
                        <h1 className = "text-center text-xl font-bold">Estimate Risks</h1>
                    
                        <h1 className = "text-center">Probability of being triggered by a past crime</h1>
                        
                        <BlockMath 
                            math = {
                                `p^{ij}_n = \\frac{\\theta \\omega e^{-\\omega(t^i_n - t^j_n)}}{\\lambda_n(t^j_n)}`
                            }
                        />

                        <h1 className = "text-center">Probability of being a background crime</h1>

                        <BlockMath
                            math = {
                                `p^{j}_n = \\frac{\\mu_n}{\\lambda_n(t^j_n)}`
                            }
                        />
                    </div>

                    <div>
                        <h1 className = "text-center text-lg font-bold">Notations</h1>

                        <ul>
                            <li><InlineMath math = {`p^{ij}_n`}/>: The probability that crime {currentCrime} in {policingArea} is triggered by past crime {pastCrime} in {policingArea}</li>
                            <li><InlineMath math = {`p^j_n`}/>: The probability that crime {currentCrime} in {policingArea} is a backrgound crime in {policingArea}</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className = "text-center text-lg font-bold">Explanation</h1>

                        <ul>
                            <li>
                                <InlineMath math = {`\\theta \\omega e^{-\\omega(t^i_n - t^j_n)}`}/>: How much crime {pastCrime} contributes to crime {currentCrime}
                            <br/>
                                → If crime {pastCrime} occurrs shortly before crime {currentCrime}, the contribution is large; if crime {pastCrime} occurs long ago, the contribution is small
                            </li>
                            <li><InlineMath math = {`\\lambda_n(t^j_n)`}/>: The crime rate in {policingArea} when crime {currentCrime} occurs</li>

                        </ul>
                    </div>

                    <div>
                        <h1 className = "text-center text-lg font-bold">Key takeaway</h1>

                        <ul>
                            <li>
                                Probability that crime {currentCrime} was triggered by crime {pastCrime}: 
                                <br/>
                                <BlockMath math = {`\\displaystyle{\\frac{\\text{Contribution of event } i}{\\text{Crime rate in } n \\text{ at the time of crime } j}}`}/>
                            </li>
                            <li>
                                Probability that crime {currentCrime} is a background crime:
                                <br/>
                                <BlockMath math = {`\\displaystyle{\\frac{\\text{Contribution of baseline crime rate}}{\\text{Crime rate in } n \\text{ at the time of crime } j}}`}/>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className = "bg-cream p-5 rounded-xl space-3-gap">
                    <div>
                        <h1 className = "text-center text-xl font-bold">Update the parameters</h1>

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
                            <li><InlineMath math = {`\\sum_{i \\lt j}`}/>: Sum over all pairs where crime {pastCrime} occurs before crime {currentCrime}</li>
                            <li><InlineMath math = {`T`}/>: Length of observation</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <h1 className = "text-center text-lg font-bold">Explanation</h1>

                            <li><InlineMath math = {`\\sum_n \\sum_{i \\lt j} p^{ij}_n`}/>: Sum of the probabilities of triggering across all crime {pastCrime} - crime {currentCrime} pairs and all policing areas</li>
                            <li><InlineMath math = {`\\sum_n \\sum_{i \\lt j} p^{ij}_n (t^j_n - t^i_n)`}/>: The total triggering time gaps</li>
                            <li><InlineMath math = {`\\sum_n \\sum_j p^j_n`}/>: Sum of the probabilities of being a background crime across all crimes and all policing areas</li>
                            <li><InlineMath math = {`\\sum_n \\sum_j 1`} />: The total number of crimes across all policing areas</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className = "text-center text-lg font-bold">Key takeaway</h1>

                        <ul>
                            <li>
                                New rate of temporal decay:
                                <br/>
                                <BlockMath math = {`\\displaystyle{\\frac{\\text{Expected number of triggered crimes}}{\\text{Total triggering time gaps}}}`}/>
                            </li>
                            <li>
                                New baseline crime rate:
                                <br/>
                                <BlockMath math = {`\\displaystyle{\\frac{\\text{Expected number of background crimes}}{\\text{Observation length}}}`}/>
                            </li>
                            <li>
                                New rate of being triggered by another crime:
                                <BlockMath math = {`\\displaystyle{\\frac{\\text{Expected number of triggered crimes}}{\\text{Total number of crimes}}}`}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}