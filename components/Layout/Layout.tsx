import Head from 'next/head'

type LayoutProps = {
    children: React.ReactNode;
    page: string;
}

const Layout: React.FC<LayoutProps> = ({ children, page }) => {
  return (
    <div>
        <Head>
            <title>Spotify Search - {page}</title>
            <meta name='description' content='Spotify search album by artist' />
        </Head>
        {children}
    </div>
  )
}

export default Layout;