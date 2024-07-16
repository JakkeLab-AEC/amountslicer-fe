import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sideNavBar";
import MainViewport from "../components/viewport/mainviewport";

export default function Page() {
    return (
        <main>
            <Header/>
            <aside>
                <Sidebar/>
            </aside>
            <div style={{position: 'relative'}}>
                <MainViewport />
            </div>
        </main>
    )
}