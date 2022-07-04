import { HeroList } from "../hero/HeroList"

export const MarvelScreen = () => {
  return (
    <>
        <header className="bg-danger text-center text-bg-danger rounded-top rounded-5">
            <h1>Marvel Screen</h1>
        </header>

        <div className="container">
            <HeroList publisher="Marvel Comics" />
        </div>
    </>
  )
}
