import {extendTheme} from '@chakra-ui/react';
import './font.css';

const theme = extendTheme({
    fonts: {
        heading: `'proximanova regular', proximanova bold`,
        body:  `'proximanova bold'`
    }
});

export default theme;