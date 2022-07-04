import { HeroList } from "../hero/HeroList";

export const DcScreen = () => {
    return (
        <>
            <header className="bg-primary text-center text-white rounded-top rounded-5 opacity-75">
                <h1>DC Screen</h1>
            </header>

            <div className="container">
                <HeroList publisher='DC Comics'/>
            </div>
        </>
    )
}
