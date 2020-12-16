function Footer(){

    const year = new Date().getFullYear();

    return(
        <footer style={{
            textAlign: 'center',
            fontSize: '.9em'
        }}>
            <p>
            Copyright &copy; {year} Andy Kawabata
            </p>
            
        </footer>
    )
}

export default Footer;