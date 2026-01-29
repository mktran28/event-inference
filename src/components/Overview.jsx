import { InlineMath } from "react-katex";

export default function Overview() {
    return (
        <div className = "bg-purple space-y-5 p-3">
            <h1 className = "text-5xl text-center font-amaticsc font-bold text-blue">Overview</h1>

            <div className = "max-w-4xl mx-auto text-center space-y-5">
                <div>
                    <h1 className = "text-xl font-bold">What is predictive policing?</h1>

                    <div>
                        Predictive policing is a technique that uses algorithms to predict and prevent crimes. 
                        It involves analyzing historical crime data and demographic information, as well as other sources, 
                        to identify people who are more likely to commit crimes or places where criminal activities are more likely to occur. 
                        It is believed that the technique can help law enforcement allocate resources more effectively and reduce crime rates. 
                        However, many have raised concerns about how predictive policing can reinforce a biased system and, subsequently, perpetuate inequalities.
                    </div>
                </div>

                <div>
                    <h1 className = "text-xl font-bold">What is PredPol?</h1>

                    <div>
                        PredPol (short for "predictive policing") was one of the first and most popular predictive policing software. 
                        The software analyzes historical crime data to forecast where and when crimes may occur, thereby identifying crime "hotspots" for police patrols. 
                        PredPol was created in 2010 as a collaborative project between the Los Angeles Police Department and the University of California, Los Angeles, and was rebranded as Geolitica in 2021.
                    </div>
                </div>

                <div>
                    <h1 className = "text-xl font-bold">What is the Epidemic-Type Aftershock (ETAS) model?</h1>

                    <div>
                        The ETAS model provides the mathematical basis for PredPol.
                        ETAS was originally used to detect "hotspots" for earthquakes and adapted to detect crime "hotspots" in PredPol.
                        In general, the model identifies short-term and long-term hotspots 
                        and uses the Expectation-Maximization (EM) algorithm to assess their risks.
                        It assumes that background crimes naturally occur at a constant rate <InlineMath math = {`\\mu`} />,
                        each event can trigger <InlineMath math = {`N`}/> other crimes, 
                        and the events have a contagious effect ("aftershock") that can be prevented by law enforcement.
                    </div>
                </div>
            </div>
        </div>
    )
}