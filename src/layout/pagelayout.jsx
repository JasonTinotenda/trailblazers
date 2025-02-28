import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

const PageLayout = () => (
  <div>
    <Header />
    <main>
      <Outlet /> {/* Nested routes will render here */}
    </main>
    <Footer />
  </div>
);

export default PageLayout;
