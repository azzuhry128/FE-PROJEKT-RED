import { Navigate, useNavigate } from "react-router-dom"

const logout = () => {
    console.log("logging user out")
    const navigate = useNavigate()
    navigate('/login')
}

export { logout }