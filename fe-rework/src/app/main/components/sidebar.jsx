export default function Sidebar () {
    return (
        <div className="flex flex-col w-72 h-screen shadow-2xl">
            <div id="upper-section" className="flex-1">
                <section id="user">
                    <div className="flex flex-row mx-4 py-8 justify-center align-middle">
                        <div className="h-12 w-12 rounded-full mr-1 bg-slate-600"></div>
                        <div flex flex-col>
                            <h1>John Doe</h1>
                            <h3>johndoe128@gmail.com</h3>
                        </div>
                    </div>
                </section>
            </div>

            <div id="main-section" className="flex-auto">
                <section id="messaging">
                    <div className="mx-4">
                        <h1 className="mb-5 font-semibold">Messaging</h1>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row">
                                <div className="w-8 h-8 rounded bg-slate-600"></div>
                                <h3 className="p-1">Messages</h3>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-8 h-8 rounded bg-slate-600"></div>
                                <h3 className="p-1">Groups</h3>
                            </div>
                            <div className="flex flex-row">
                                <div className="w-8 h-8 rounded bg-slate-600"></div>
                                <h3 className="p-1">Calls</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="settings">
                    <div className="mx-4 mt-12">
                            <h1 className="mb-5 font-semibold">Settings</h1>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row">
                                    <div className="w-8 h-8 rounded bg-slate-600"></div>
                                    <h3 className="p-1">User Setting</h3>
                                </div>
                                <div className="flex flex-row">
                                    <div className="w-8 h-8 rounded bg-slate-600"></div>
                                    <h3 className="p-1">Account</h3>
                                </div>
                            </div>
                        </div>
                </section>
            </div>

            <div id="lower-section" className="flex flex-1 items-end ">
                <button className="flex flex-row mx-4">
                    <div className="w-8 h-8 rounded bg-red-300"></div>
                    <h3 className="p-1 font-semibold mb-4">Logout</h3>
                </button>
            </div>
        </div>
    )
}