import { useOutletContext } from "react-router-dom"
import { useEffect } from "react"




export default function HomePage() {
    const { setCurrentPage } = useOutletContext();
    useEffect(() => {
        setCurrentPage("Home");
    }, [setCurrentPage]);
    return (
        <div className="page_container">
            <h1>Home Page</h1>
            <p>Welcome! I'm so glad you are here.</p>
        </div>
    )
}