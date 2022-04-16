import { lazy, Suspense } from "react";
import { GlobalStyle } from "./globalStyles";
// components are imported using lazy
const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
    return (
        <>
            <Suspense fallback={null}>
                <GlobalStyle />
                <Header />
                <Home />
                <Footer />
                <ScrollToTop />
            </Suspense>
        </>
    );
}

export default App;
