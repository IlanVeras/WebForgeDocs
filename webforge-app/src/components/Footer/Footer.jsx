import React from "react"

export default function Footer({texto}){
    return(
        <>
            <footer>
                <p>&copy; {new Date().getFullYear()} WebForge. Todos os direitos reservados.</p>
                <p>
                    Siga-nos nas redes sociais:
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
                </p>
            </footer>
        </>
    )
}
