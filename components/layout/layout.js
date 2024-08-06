import Footer from "./footer";
import Header from "./header";

const Leyout = ({ children }) => {
    return (
        <>
            <div className="w-full h-full min-h-screen bg-white ">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Leyout