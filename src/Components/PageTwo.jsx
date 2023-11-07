import React from "react";
import { Link } from 'react-router-dom'

import "../Styles/PageTwo.css";

const PageTwo = () => {
  return (
    <div className="container ">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h2>My Tasks</h2>
        <h5 className="text-primary">+ Add New Task</h5>
      </div>

      <div className="d-flex justify-content-between align-items-center border">
        <h6 className="text-decoration-none ms-3">Urgent</h6>

        <div className="d-flex align-items-center">
          <button className="btn btn-primary w-5 me-3">📝Edit</button>
          <button className=" ">🗑️Delete</button>
        </div>
      </div>
      <div className="border">
        <h2>FinTech Website Update</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          sed adipisci quam minima, excepturi quibusdam dolor nulla aliquid
          assumenda debitis repellat? Tempore ab repudiandae dicta ipsam harum
          cumque hic adipisci veniam odit fugit, aspernatur sapiente blanditiis
          sequi autem laboriosam magnam minima quo error expedita saepe!
        </p>
      </div>

      <div>
        <div className="container ">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h2>My Tasks</h2>
            <h5 className="text-primary">+ Add New Task</h5>
          </div>

          <div className="d-flex justify-content-between align-items-center border">
            <h6 className="text-decoration-none ms-3">Important</h6>

            <div className="d-flex align-items-center ">
              <button className="btn btn-primary w-5 me-3">📝Edit</button>
              <button className="">🗑️Delete</button>
            </div>
          </div>
          <div className="border">
            <h2>Agro Website Update</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate sed adipisci quam minima, excepturi quibusdam dolor
              nulla aliquid assumenda debitis repellat? Tempore ab repudiandae
              dicta ipsam harum cumque hic adipisci veniam odit fugit,
              aspernatur sapiente blanditiis sequi autem laboriosam magnam
              minima quo error expedita saepe!
            </p>
          </div>
        </div>
      </div>

      <div>
      <div className="container ">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h2>My Tasks</h2>
        <h5 className="text-primary">+ Add New Task</h5>
      </div>

      <div className="d-flex justify-content-between align-items-center border">
        <h6 className="text-decoration-none ms-3">Urgent</h6>
        
        <div className="d-flex align-items-center ">
          <button className="btn btn-primary w-5 me-3">📝Edit</button>
          <button className="">🗑️Delete</button>
        
          </div>
          </div>
        <div className="border">
          <h2>FinTech Website Update</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            sed adipisci quam minima, excepturi quibusdam dolor nulla aliquid
            assumenda debitis repellat? Tempore ab repudiandae dicta ipsam harum
            cumque hic adipisci veniam odit fugit, aspernatur sapiente
            blanditiis sequi autem laboriosam magnam minima quo error expedita
            saepe!
          </p>
        </div>
      </div>
    </div>
    <div>
    <div className="container ">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h2>My Tasks</h2>
        <h5 className="text-primary">+ Add New Task</h5>
      </div>

      <div className="d-flex justify-content-between align-items-center border">
        <h6 className="text-decoration-none ms-3">Urgent</h6>
        
        <div className="d-flex align-items-center ">
          <button className="btn btn-primary w-5 me-3">📝Edit</button>
          <button className="">🗑️Delete</button>
        
          </div>
          </div>
        <div className="border">
          <h2>FinTech Website Update</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            sed adipisci quam minima, excepturi quibusdam dolor nulla aliquid
            assumenda debitis repellat? Tempore ab repudiandae dicta ipsam harum
            cumque hic adipisci veniam odit fugit, aspernatur sapiente
            blanditiis sequi autem laboriosam magnam minima quo error expedita
            saepe!
          </p>
        </div>
    </div>
    </div>
    <footer className="text-center">
    <Link to="/PageTwo">Back To Top</Link>
    </footer>
    </div>

    
    
  );
};

export default PageTwo;
