import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sideNavBar";

export default function Page() {
    return (
        <body>
            <Header/>
            <aside className="h-[100%]">
                <Sidebar/>
            </aside>
        </body>
    )
}