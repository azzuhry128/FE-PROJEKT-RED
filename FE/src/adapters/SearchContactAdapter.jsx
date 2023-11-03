import { searchUser } from "../api/search"
import { MessageComponent } from "../components/MessageComponent"
import { SearchMessageComponent } from "../components/SearchMessageComponent"

export const SearchContactAdapter = (username) => {
    console.log("searching user...")
    const searchResult = searchUser(username)
    return(
        <SearchMessageComponent profile={searchResult}/>
    )
}