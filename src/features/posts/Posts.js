import React from 'react';
import './Posts.scss'
import { Link } from 'react-router-dom';

const Posts = () => {
  return (
    <div className="blog mt-5">
      <div className='container'>
        <div className="row">
          <div className="col-md-12 my-3">
            <div className="card">
              <div className="card-body">
                <div className="blog-item">
                  <img src="" alt="" />
                  <div className="blog-info">
                    <h2>Title</h2>
                    <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, maxime.</p>
                    <Link to="/456" className='btn btn-info'>Read more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts