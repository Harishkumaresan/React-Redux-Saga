import React from 'react';
import img from './img/download.png';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { searchProduct } from '../Redux/productAction';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header1 = ({ children }) => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  return (
    <>
      {/* Header/Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-warning px-3" style={{ height: '80px' }}>

        <div className="container-fluid">
          {/* E-COM Logo (Left) */}
          <NavLink to="/" className="navbar-brand fw-bold">
            E-COM
          </NavLink>

          {/* Search Bar (Center) */}
          <form className="d-flex mx-auto" style={{ width: '40%' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search products"
              onChange={(event) => dispatch(searchProduct(event.target.value))}
            />
          </form>

          {/* Right Section: Cart & Navigation Links */}
          <div className="d-flex align-items-center">
            {/* Navigation Links */}
            <NavLink to="#" className="nav-link mx-2 fw-bold text-dark">
              Name
            </NavLink>
            <NavLink to="#" className="nav-link mx-2 fw-bold text-dark">
              About
            </NavLink>
            <NavLink to="#" className="nav-link mx-2 fw-bold text-dark">
              Contact
            </NavLink>
            <NavLink to="#" className="nav-link mx-2 fw-bold text-dark">
              View
            </NavLink>

            {/* Cart Section */}
            <NavLink to="/cart" className="position-relative mx-3">
              <img src={img} alt="Cart" width="40" height="40" />
              {result.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {result.length}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mt-3">{children}</main>

      {/* Footer */}
      <footer className="bg-warning py-3 mt-4">
        <div className="container d-flex justify-content-between">
          <NavLink to="/" className="navbar-brand fw-bold">
            E-COM
          </NavLink>
          <div className="d-flex">
            <NavLink to="#" className="nav-link mx-2 fw-bold text-dark">
              Name
            </NavLink>
            <NavLink to="#" className="nav-link mx-2 fw-bold text-dark">
              About
            </NavLink>
            <NavLink to="#" className="nav-link mx-2 fw-bold text-dark">
              Contact
            </NavLink>
            <NavLink to="#" className="nav-link mx-2 fw-bold text-dark">
              View
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Header1;
