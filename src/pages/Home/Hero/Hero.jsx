import "./Hero.css"
import TypeIt from "typeit-react";

export default function Hero() {
    return (
        <section className="hero container-fluid position-relative ">
            <div className="overlay">
                <div className="text row row-cols-lg-2 flex-column align-items-center justify-content-center">
                    <TypeIt
                            className="h1"
                            element="h1"
                            options={{
                                loop: true,
                                speed: 100,
                                deleteSpeed: 60,
                                breakLines: false,
                                strings: [
                                "Skilled hands for every home.",
                                "Find the right hands for every job.",
                                "Trusted local experts at your service."
                                ]
                            }}
                    />
                    <h3>Connect with skilled craftsmen for your projects. Browse our network of verified professionals and get started today.</h3>
                    <button className="btn main-btn px-4 py-2 fw-bold">Find a Craftsman</button>
                    

                </div>
                
            </div>
        </section>
    )
}
