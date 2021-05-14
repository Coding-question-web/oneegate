/** @jsx jsx */
import { jsx, Image, Heading } from 'theme-ui';

export default function marketingItem({ item }) {
    return (
        <div style={styles.imageContainer}>
            <Image src={item.image} alt='item1' sx={styles.image} />
            <div style={styles.desc} className='contentBox'>
            {item.upDesc && (
                <p style={styles.desc.p1}>{item.upDesc}</p>
            )}
            <Heading as='h1' variant='heroPrimary' color='#fff'>
            {item.heading}
          </Heading>
            <p style={styles.desc.p2}>{item.lowDesc}</p>
            </div>
            <style jsx>
                {`
                    @media screen and (max-width: 720px) {
                        .contentBox {
                            width: 95% !important;
                            left: 5vw !important;
                        }
                    }
                `}
            </style>
        </div>
    )
}

const styles = {
    image: {
        height: '100%',
        width: '100%',
        filter: 'brightness(0.4)',
    },
    imageContainer: {
        height: '96vh',
        position: 'relative',
    },
    desc: {
        position: 'absolute',
        top: '37vh',
        left: '10vw',
        width: '45%',
        p1: {
            fontWeight: 700,
            margin: 0,
            padding: 0,
            fontSize: '1rem',
            lineHeight: 0.9,
            marginBottom: '10px'
        },
        h1: {
            fontWeight: 900,
            fontSize: '4em',
            margin: 0,
            padding: 0,
            letterSpacing: 0.5,
            lineHeight: 0.9
        },
        p2: {
            lineHeight: 0.9,
        }
    }
}