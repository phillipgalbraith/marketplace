import { Button } from "@mui/material";

function Navbar() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='nav-bar'>
          <h2>Marketplace</h2>
        </div>
        <Button variant="text" key="Owner Login" href='#'>Owner Login</Button>
        <Button variant="text" key="Shop" href='#'>Shop</Button>
        <Button variant="text" key="Logout" href='#'>Logout</Button>
      </header>

    </div>
  );
}

export default Navbar;