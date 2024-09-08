export default function ChatListDisplay () {
    return (
        <div id="chat-display-container" className="flex flex-col">
            <div id="search-bar">
                <h1 className="text-2xl font-semibold">Chats</h1>
                <div className="mt-4">
                    <form class="max-w-md mx-auto">   
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search chats" required />
                        </div>
                    </form>
                </div>
                <hr className="border-t-2 border-slate-800 my-8 w-12"/>
            </div>
            <div id="container" className="flex flex-col flex-auto justify-start">
                <div className="flex flex-row p-4 rounded justify-center hover:bg-sky-200 transition ease-in-out duration-300">
                    <div className="h-12 w-12 rounded-full mr-1 bg-slate-600"></div>
                    <div id="item-group" className="flex flex-col ">
                        <h1 id="group-name" className="font-medium">Bourjoist</h1>
                        <div className="flex flex-row gap-4">
                            <h3 id="last-message" className="text-medium text-gray-400">dimas: info kudeta pemerintah</h3>
                            <h3 id="message-time" className="text-medium text-gray-400">16:00</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div id="add-new-contact-button" className="flex flex-row justify-between">
                <div className="w-2 rounded bg-blue-500"></div>
                <button class="flex justify-self-end justify-end items-center hover:bg-blue-500 transition ease-in-out duration-300 p-2 text-black font-medium rounded">
                    <span>Add new contact</span>   
                    <div className="bg-blue-500 rounded-full p-2 ml-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                    </div> 
                </button>
            </div>
        </div>
    )
}