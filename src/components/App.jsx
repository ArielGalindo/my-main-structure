import "bootstrap/dist/js/bootstrap.bundle";
import "../styles/index.scss";
import Recipes from "./Recipes";

const App = () => {
    return(
        <>
        <section className="hero"></section>
        <main>
            <section>
                <h1>Oh Hai, React</h1>
            </section>
        </main>

        <Recipes />
        </>
    );
};

export default App;