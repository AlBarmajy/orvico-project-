import "./Hero.css"

export default function Hero() {
    return (
        <section className="hero container-fluid position-relative ">
            <div className="overlay">
                <div className="text row row-cols-lg-2 flex-column align-items-center justify-content-center">
                    <h1>Skilled hands for every home.</h1>
                    <h3>Connect with skilled craftsmen for your projects. Browse our network of verified professionals and get started today.</h3>
                    <button className="btn main-btn px-4 py-2 fw-bold">Find a Craftsman</button>
                </div>
                
            </div>
        </section>
    )
}
