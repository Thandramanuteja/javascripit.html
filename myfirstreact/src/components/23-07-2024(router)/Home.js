import { useEffect } from "react"


function Home() {

    useEffect(() => {
        return () => {
            alert('Hello')
        }
    }, [])


    return (
        <div>
            <h1>Home Page...</h1>
        </div>
    )
}
export default Home