import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('AUTH_TOK').length <= 0) {
            navigate("/signin");
        }
    }, [])

    return (
        <div>
            home
        </div>
    )
}
