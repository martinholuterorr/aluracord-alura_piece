import { Box, Text, Image } from '@skynexui/components';
import appConfig from '../config.json';
export default function Custom404() {
    return (
        <Box
            styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                backgroundColor: '#FEFEFE'
            }}
        >
            <Text
                styleSheet={{
                    fontSize: '3rem',
                    marginTop: '20vh',
                    color: appConfig.theme.colors.primary[900]
                }}
            >Erro 404 - Página não Encontrada
            </Text>
            <Image
                styleSheet={{
                    borderRadius: '10px',
                    marginTop: '1.5rem'
                }}
                src={`https://media.tenor.com/images/ebb566622a95098e591bd8135ef6436f/tenor.png`}
            />
        </Box>
    )

}