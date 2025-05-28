
import Header from '../Home-Header/Header'
import { Link } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth'; // Adjust the path as needed
import MobileHeader from '../Home-Header/Mobile-Header';
import blogList from '../../data/blogs';
function Blogs() {
   const width = useWindowWidth();


  return (
   <>
     <main className="PrntrMain">
     {width >= 1000 ? <Header /> : <MobileHeader />}

        <div className="Contact">
            <div className="crtQuote">
                <div className="calc" data-aos="fade-in" data-aos-duration="1000">
                    <a href='/ProductEnquiry'><img src="/assets/Home/calculator.png" alt=""/>
                    {/* Usage & Pricing Calculator */}
                    <p>Usage <br /> &  <br/> Pricing<br/> Calculator</p></a>
                </div>
            </div>
        </div>

        <section className="MainContainer">
            <div className="container">
                <div className="ABHero">
                    <div className="AbHro-txt" data-aos="fade-up" data-aos-duration="1000">
                        <h1>BLOGS <br/></h1>
                    </div>
                    <div className="AbHroImg blogImg1">
                        <img src="/assets/blogs/Sahara-img.png" alt=""/>
                    </div>
                </div>
            </div>   
        </section>

        <section className="customers">
            <div className="container">
                <div className="OurClnts">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="BlogSec">
                                <div className="cmpny ClntDiv" data-aos="fade-in" data-aos-duration="1000">
                                    Blogs
                                </div>
                                <h2 data-aos="fade-in" data-aos-duration="1000">Unlock new perspectives and practical advice with every post</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="BlogSec" data-aos="fade-in" data-aos-duration="1000">
                                <h3>Insights, Stories, and Inspiration.</h3>
                                <p className='clntPDesc'>Welcome to our blog — your go-to place for fresh ideas, expert insights, and inspiring stories. Whether you’re looking to learn something new, stay updated on the latest trends, or simply find a bit of inspiration, our carefully crafted articles are here to help you grow and explore. Dive in and join our community of curious minds!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


      <section className="container">
          <div className="blog-list">
            {blogList.map(blog => (
              <Link to={`/blogs/${blog.slug}`} key={blog.id} className="blog-card">
                  {width >= 1000 ?
                  <div className="blog-image">
                    <img src={blog.image} alt={blog.slug} />
                  </div> 
                : ''}
                <div className="blog-content">
                  <h4>{blog.title}</h4>
                  <p>{blog.excerpt}</p>
                  <span className="blog-date">{blog.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>



       
    </main>
   </>
  )
}

export default Blogs
