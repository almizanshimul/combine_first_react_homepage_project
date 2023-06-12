import classes from '../../style/HeroBanner.module.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

const HeroBanner = () => {
    return (
        <>
            <ThemeProvider>
                <h1>Hello eorld</h1>
            </ThemeProvider>
        </>
    )
}

export default HeroBanner;