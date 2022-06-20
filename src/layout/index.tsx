import { ReactNode, useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Divider } from '../components/Elements/Divider';
import { Drawer } from '../components/Elements/Drawer';
import { DrawerButton } from '../components/Elements/DrawerButton';
import { Footer } from '../components/Elements/Footer';
import { FooterAttach } from '../components/Elements/Footer/FooterAttach';
import { FooterFirstSection } from '../components/Elements/Footer/FooterFirstSection';
import { FooterLink } from '../components/Elements/Footer/FooterLink';
import { FooterSecondSection } from '../components/Elements/Footer/FooterSecondSection';
import { FooterTitle } from '../components/Elements/Footer/FooterTitle';
import { Header } from '../components/Elements/Header';
import { HeaderAuthenticationContainer } from '../components/Elements/Header/HeaderAuthenticationContainer';
import { HeaderLink } from '../components/Elements/Header/HeaderLink';
import { HeaderLinksContainer } from '../components/Elements/Header/HeaderLinksContainer';
import { HeaderLogoContainer } from '../components/Elements/Header/HeaderLogoContainer';
import { Logo } from '../components/Elements/Logo';
import { PrimaryButton } from '../components/Elements/PrimaryButton';
import { SocialIcons } from '../components/Elements/SocialIcons';
import { TopScrollButton } from '../components/Elements/TopScrollButton';
import { Text } from '../components/Typography/Text';
import { Container } from './styles';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

    const theme = useTheme()

    const [toggleDrawer, setToggleDrawer] = useState(false)
    const [headerAnimation, setHeaderAnimation] = useState(false)
    const [scrollTopAnimation, setScrollTopAnimation] = useState(false)

    function handleToggleDrawer() {
        setToggleDrawer(!toggleDrawer)
    }

    function scrollHeaderAnimation() {
        //@ts-ignore
        const topPos = window.scrollY
        if (topPos > 20) {
            setHeaderAnimation(true)
        } else {
            setHeaderAnimation(false)
        }
    }

    function scrollTopScrollButtonAnimation() {
        //@ts-ignore
        const topPos = window.scrollY
        if (topPos > 500) {
            setScrollTopAnimation(true)
        } else {
            setScrollTopAnimation(false)
        }
    }


    function callAnimations() {
        scrollTopScrollButtonAnimation()
        scrollHeaderAnimation()
    }

    useEffect(() => {
        window.addEventListener('scroll', callAnimations)
        return () => window.removeEventListener('scroll', callAnimations)
        //eslint-disable-next-line
    }, [])

    return (
        <Container id='top'>
            <TopScrollButton
                className={scrollTopAnimation ? 'animatedTopScroll' : 'normalTopScroll'}
                icon={<MdArrowUpward />}
                elementReferenceId='top'
            />
            <Header
                className={headerAnimation ? 'headerScrolling' : 'headerNotScrolling'}
            >
                {toggleDrawer &&
                    <Drawer
                        toggleDrawer={handleToggleDrawer}
                        direction='top'
                        style={{
                            backgroundColor: theme.colors.black100
                        }}
                    >
                        <HeaderLink
                            content='Sobre o treinamento'
                            url='/#metrics'
                            onClick={handleToggleDrawer}
                        />
                        <HeaderLink
                            content='O que dizem sobre o treinamento'
                            url='/#testimonials'
                            onClick={handleToggleDrawer}
                        />
                        <HeaderLink
                            content='Quero queimar gordura'
                            url='/#purchase'
                            onClick={handleToggleDrawer}
                        />
                    </Drawer>
                }
                <DrawerButton
                    toggleDrawer={handleToggleDrawer}
                />
                <HeaderLogoContainer>
                    <Logo
                        imageUrl='/logo.png'
                    />
                </HeaderLogoContainer>
                <HeaderLinksContainer>
                    <HeaderLink
                        content='Sobre nós'
                        url='/'
                    />
                    <HeaderLink
                        content='Sobre o treinamento'
                        url='/'
                    />
                </HeaderLinksContainer>
                <HeaderAuthenticationContainer>
                    <PrimaryButton
                        title='Quero queimar gordura'
                        size='large'
                        onClick={() => { }}
                        style={{
                            backgroundColor: theme.colors.primary
                        }}
                    />
                </HeaderAuthenticationContainer>
            </Header>
            <main>{children}</main>
            <Footer
                style={{
                    backgroundColor: theme.colors.black100
                }}
            >
                <FooterFirstSection>
                    <FooterTitle
                        content='O treinamento'
                    />
                    <FooterLink
                        content='Sobre o treinamento'
                        url='/#metrics'
                    />
                    <FooterLink
                        content='O que dizem sobre o treinamento'
                        url='/#testimonials'
                    />
                </FooterFirstSection>
                <FooterSecondSection>
                    <FooterTitle
                        content='Contato'
                    />
                    <SocialIcons
                        linkedinUrl='https://www.linkedin.com/in/pablo-silva-76b521156'
                        githubUrl='https://github.com/pablolucio97'
                        instagramUrl='https://www.instagram.com/pablosilva.dev'
                        iconsSize='small'
                    />
                </FooterSecondSection>
            </Footer>
            <FooterAttach
                style={{
                    backgroundColor: theme.colors.black100,
                }}
            >
                <Divider />
                <Text
                    content='PabloSilvaDev - © Copyright  2022'
                    style={{
                        color: theme.colors.white100,
                        fontSize: theme.sizes.small
                    }}

                />
            </FooterAttach>
        </Container>
    )
}