import Chat from "./components/chat";
import Sidebar from "./components/sidebar";

export default function Page () {
    return (
        <div className="flex flex-row">
            {Sidebar()}
            {Chat()}
        </div>
    )
}