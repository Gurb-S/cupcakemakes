export function Header() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={require("../logo.jpeg")} height={50} width={50} alt="logo" className="rounded-circle"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Cupcake Gallery</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Cake Gallery</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}