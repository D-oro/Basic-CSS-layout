import './style/HomePage.css'

const HomePage = () =>{

    return(
        <div className="homepage">
            <header className="hp-header">
                header<br></br>
                width: 100%<br></br>
                height: 15%
            </header>

            <main className="hp-main">
                <div className="hp-left">
                    left<br></br>
                    width: 20% <br></br>
                    height: 95% <br></br>
                </div>

                <div className="hp-center">
                    background is 100vh and 100vw<br></br>
                    main is 100% width and 60% height<br></br>
                    <br></br>
                    center<br></br>
                    width: 50% <br></br>
                    height: 95% <br></br>


                </div>

                <div className="hp-right">
                    right<br></br>
                    width: 20% <br></br>
                    height: 95% <br></br>
                </div>

            </main>

            <footer className="hp-footer">
                footer<br></br>
                width: 100%<br></br>
                height: 15%
            </footer>

        </div>
    )
}

export default HomePage