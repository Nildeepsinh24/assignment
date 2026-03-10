import styled, { createGlobalStyle } from 'styled-components';
import { FiSearch, FiHeart, FiUser, FiShoppingCart, FiMenu, FiPhone } from 'react-icons/fi';
import { BiChevronDown, BiGridAlt } from 'react-icons/bi';

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  body {
    background-color: #fff;
    color: #333;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }
`;

// --- Styled Components ---

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 15px;
`;

// 1. Top Bar
const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-size: 13px;
  color: #777;
  border-bottom: 1px solid #eaeaea;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

const TopLinks = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

// 2. Middle Header (Logo & Search)
const MiddleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: #3bb77e;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex: 0.6;
  border: 2px solid #3bb77e;
  border-radius: 5px;
  overflow: hidden;
  min-width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
    flex: 1;
  }
`;

const CategorySelect = styled.select`
  padding: 12px;
  border: none;
  border-right: 1px solid #ccc;
  background: white;
  outline: none;
  font-weight: 600;
  @media (max-width: 480px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 20px;
  border: none;
  outline: none;
  font-size: 15px;
  min-width: 50px;
`;

const SearchButton = styled.button`
  padding: 0 20px;
  background: white;
  border: none;
  color: #777;
  cursor: pointer;
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 15px;
    cursor: pointer;
    font-weight: 500;
    
    svg {
      font-size: 22px;
      color: #333;
    }
  }
`;

// 3. Navigation Bar
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;
  flex-wrap: wrap;
  gap: 15px;
`;

const BrowseCategories = styled.button`
  background-color: #3bb77e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  li {
    display: flex;
    align-items: center;
    gap: 3px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #3bb77e;
    }
  }

  @media (max-width: 1024px) {
    display: none; /* In a real app we'd add a mobile hamburger menu. Hiding to save space for now */
  }
`;

const SupportInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 700;
  color: #3bb77e;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// 4. Hero Banner Section
const HeroSection = styled.section`
  background-color: #ffe6cf;
  border-radius: 20px;
  margin-top: 30px;
  display: flex;
  padding: 60px;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 30px;
    min-height: auto;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  z-index: 2;
  
  h1 {
    font-size: 55px;
    color: #253D4E;
    line-height: 1.1;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 35px;
    }
  }
  
  p {
    font-size: 18px;
    color: #7E7E7E;
    margin-bottom: 40px;
  }
`;

const SubscribeForm = styled.div`
  display: flex;
  background: white;
  border-radius: 30px;
  padding: 5px;
  width: 100%;
  max-width: 450px;
  
  @media (max-width: 500px) {
    flex-direction: column;
    background: transparent;
    padding: 0;
    button {
      margin-top: 10px;
    }
    input {
      background: white;
      padding: 15px;
      border-radius: 30px;
    }
  }
  
  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0 20px;
    background: transparent;
    font-size: 15px;
  }
  
  button {
    background-color: #3bb77e;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 30px;
    font-weight: 700;
    cursor: pointer;
    font-size: 15px;
  }
`;

const HeroImage = styled.div`
  position: absolute;
  right: 50px;
  bottom: 0;
  width: 45%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800') center/contain no-repeat;
  
  @media (max-width: 1024px) {
    opacity: 0.3;
    right: -50px;
  }
`;

// 5. Featured Categories Section
const CategoriesSection = styled.section`
  margin-top: 50px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;

  h2 {
    font-size: 28px;
    color: #253D4E;
  }

  ul {
    display: flex;
    gap: 20px;
    color: #253D4E;
    font-weight: 600;
    flex-wrap: wrap;
    
    li {
      cursor: pointer;
      &:hover { color: #3bb77e; }
    }
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 20px;
  
  @media (max-width: 1200px) { grid-template-columns: repeat(5, 1fr); }
  @media (max-width: 768px) { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 480px) { grid-template-columns: repeat(2, 1fr); }
`;

const CategoryCard = styled.div`
  background-color: ${props => props.bg || '#F3F4F6'};
  padding: 20px 10px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.05);
  }

  .icon {
    font-size: 40px;
    margin-bottom: 10px;
  }

  h6 {
    font-size: 14px;
    color: #253D4E;
    margin-bottom: 5px;
  }

  span {
    font-size: 12px;
    color: #7E7E7E;
  }
`;

function App() {
  const categories = [
    { name: 'Red Apple', items: '26 items', icon: '🍎', bg: '#F2FCE4' },
    { name: 'Snack', items: '28 items', icon: '🥨', bg: '#FFFCEB' },
    { name: 'Vegetables', items: '14 items', icon: '🥬', bg: '#ECFFEC' },
    { name: 'Strawberry', items: '54 items', icon: '🍓', bg: '#FEEFEA' },
    { name: 'Black plum', items: '87 items', icon: '🍇', bg: '#FFF3EB' },
    { name: 'Custard apple', items: '14 items', icon: '🍐', bg: '#FFF3FF' },
    { name: 'Coffee & Tea', items: '89 items', icon: '☕', bg: '#F2FCE4' },
    { name: 'Headphone', items: '87 items', icon: '🎧', bg: '#FFFCEB' },
    { name: 'Cake & Milk', items: '26 items', icon: '🍰', bg: '#FEEFEA' },
    { name: 'Organic Kiwi', items: '28 items', icon: '🥝', bg: '#ECFFEC' },
  ];

  return (
    <>
      <GlobalStyle />
      <Container>

        {/* Top Minimal Bar */}
        <TopBar>
          <TopLinks>
            <span>About Us</span>
            <span>My Account</span>
            <span>Order Tracking</span>
          </TopLinks>
          <div>Supper Value Deals - Save more with coupons</div>
          <TopLinks>
            <span>Need help? Call Us: <strong>1800 900</strong></span>
            <span>English <BiChevronDown /></span>
            <span>USD <BiChevronDown /></span>
          </TopLinks>
        </TopBar>

        {/* Header with Search */}
        <MiddleHeader>
          <Logo>
            🛒 Nest
          </Logo>

          <SearchContainer>
            <CategorySelect>
              <option>All Categories</option>
            </CategorySelect>
            <SearchInput placeholder="Search for items..." />
            <SearchButton><FiSearch size={20} /></SearchButton>
          </SearchContainer>

          <ActionIcons>
            <div><FiHeart /> <span>Wishlist</span></div>
            <div><FiShoppingCart /> <span>Cart</span></div>
            <div><FiUser /> <span>Account</span></div>
          </ActionIcons>
        </MiddleHeader>

        {/* Main Navigation */}
        <Nav>
          <BrowseCategories>
            <BiGridAlt size={22} /> Browse All Categories <BiChevronDown size={22} style={{ marginLeft: 'auto' }} />
          </BrowseCategories>

          <NavLinks>
            <li>🔥 Hot Deals</li>
            <li>Home <BiChevronDown /></li>
            <li>About</li>
            <li>Shop <BiChevronDown /></li>
            <li>Vendors <BiChevronDown /></li>
            <li>Mega menu <BiChevronDown /></li>
            <li>Blog <BiChevronDown /></li>
            <li>Pages <BiChevronDown /></li>
            <li>Contact</li>
          </NavLinks>

          <SupportInfo>
            <FiPhone />
            <div>
              1900 - 888<br />
              <span style={{ fontSize: '11px', color: '#777', fontWeight: '500' }}>24/7 Support Center</span>
            </div>
          </SupportInfo>
        </Nav>

        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <h1>Don't miss amazing<br />grocery deals</h1>
            <p>Sign up for the daily newsletter</p>
            <SubscribeForm>
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </SubscribeForm>
          </HeroContent>
          <HeroImage />
        </HeroSection>

        {/* Featured Categories */}
        <CategoriesSection>
          <SectionHeader>
            <h2>Featured Categories</h2>
            <ul>
              <li>Cake & Milk</li>
              <li>Coffee & Teas</li>
              <li>Pet Foods</li>
              <li>Vegetables</li>
            </ul>
          </SectionHeader>

          <CategoriesGrid>
            {categories.map((cat, idx) => (
              <CategoryCard key={idx} bg={cat.bg}>
                <div className="icon">{cat.icon}</div>
                <h6>{cat.name}</h6>
                <span>{cat.items}</span>
              </CategoryCard>
            ))}
          </CategoriesGrid>
        </CategoriesSection>

      </Container>
    </>
  );
}

export default App;
