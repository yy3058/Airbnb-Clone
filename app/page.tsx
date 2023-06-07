import Head from 'next/head';
import Navbar from './components/navbar/navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
// import { Inter } from 'next/font/google';
import Container from './components/Container';
import EmptyState from './components/EmptyState';
import getListings from './actions/getListings';
import ListingCard from './components/listings/ListingCard';
import getCurrentUser from './actions/getCurrentUser';

// const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ClientOnly>
        <Container>
          <div
            className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
          >
            {listings.map((listing: any) => {
              return (
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
              );
            })}
          </div>
        </Container>
      </ClientOnly>
    </ClientOnly>
  );
}

// const Search = () => {
//   return <div></div>;
// };

// export default Search;
