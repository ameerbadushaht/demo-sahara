import { useParams } from "react-router-dom";
import blogList from "../../data/blogs";
import Header from "../Home-Header/Header";

import useWindowWidth from "../../hooks/useWindowWidth"; // Adjust the path as needed
import MobileHeader from "../Home-Header/Mobile-Header";
function BlogDetails() {
  const { slug } = useParams();
  const blog = blogList.find((b) => b.slug === slug);
  const width = useWindowWidth();
  if (!blog) return <div>Blog not found</div>;

  return (
    <>
      <main className="PrntrMain">
        {width >= 1000 ? <Header /> : <MobileHeader />}

        <div className="Contact">
          <div className="crtQuote">
            <div className="calc" data-aos="fade-in" data-aos-duration="1000">
              <a href="/ProductEnquiry">
                <img src="/assets/Home/calculator.png" alt="" />
                {/* Usage & Pricing Calculator */}
                <p>
                  Usage <br /> & <br /> Pricing
                  <br /> Calculator
                </p>
              </a>
            </div>
          </div>
        </div>

        <section className="MainContainer">
          <div className="container">
            <div className="ABHero">
              <div
                className="AbHro-txt"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1>
                  BLOGS <br />
                </h1>
              </div>
              <div className="AbHroImg blogImg1">
                <img src="/assets/blogs/Sahara-img.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="customers">
          <div className="container">
            <div className="OurClnts">
              <div className="row">
                <div className="col-md-3">
                  <div className="BlogSec ">
                    <div
                      className="cmpny ClntDiv"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                    >
                      Blogs
                    </div>

                    <div className="blog-meta">
                      <div className="meta-section">
                        <h5 className="meta-label">Author</h5>
                        <p className="meta-value">Albert Vilies</p>
                      </div>

                      <hr className="meta-divider" />

                      <div className="meta-section">
                        <h5 className="meta-label">Date</h5>
                        <p className="meta-value">27 May, 2025</p>
                      </div>

                      <hr className="meta-divider" />

                      <div className="meta-section">
                        <p className="meta-location">Dubai, Middleeast</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
                  <div
                    className="BlogSec  ClntTopMarg"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                  >
                    <div className="container blog-detail">
                      <h1>{blog.title}</h1>
                      <img src={blog.image} alt={blog.title} />
                      {/* <p><em>{blog.date}</em></p> */} <br /><br /><br />
                      <p style={{ textAlign: "justify" }}>
                        Introduction: <br />
                        Printers are incredibly useful but can sometimes be
                        frustrating when issues arise. The good news is that
                        many common printer problems have simple solutions you
                        can try before calling for professional help. Printers
                        are incredibly useful but can sometimes be frustrating
                        when issues arise. The good news is that many common
                        printer problems have simple solutions you can try
                        before calling for professional help. Printers are
                        incredibly useful but can sometimes be frustrating when
                        issues arise. The good news is that many common printer
                        problems have simple solutions you can try before
                        calling for professional help. Printers are incredibly
                        useful but can sometimes be frustrating when issues
                        arise. The good news is that many common printer
                        problems have simple solutions you can try before
                        calling for professional help. Printers are incredibly
                        useful but can sometimes be frustrating when issues
                        arise. The good news is that many common printer
                        problems have simple solutions you can try before
                        calling for professional help. Printers are incredibly
                        useful but can sometimes be frustrating when issues
                        arise. The good news is that many common printer
                        problems have simple solutions you can try before
                        calling for professional help. vvwv Printers are
                        incredibly useful but can sometimes be frustrating when
                        issues arise. The good news is that many common printer
                        problems have simple solutions you can try before
                        calling for professional help. Printers are incredibly
                        useful but can sometimes be frustrating when issues
                        arise. The good news is that many common printer
                        problems have simple solutions you can try before
                        calling for professional help. Printers are incredibly
                        useful but can sometimes be frustrating when issues
                        arise. The good news is that many common printer
                        problems have simple solutions you can try before
                        calling for professional help. Printers are incredibly
                        useful but can sometimes be frustrating when issues
                        arise. The good news is that many common printer
                        problems have simple solutions you can try before
                        calling for professional help. Printers are incredibly
                        useful but can sometimes be frustrating when issues
                        arise. The good news is that many common printer
                        problems have simple solutions you can try before
                        calling for professional help. Printers are incredibly
                        useful but can sometimes be frustrating when issues
                        arise. The good news is that many common printer
                        problems have simple solutions you can try before
                        calling for professional help. Printers are incredibly
                        useful but can sometimes be frustrating when issues
                        arise. The good news is that many common printer
                        problems have simple solutions you can try before
                        calling for professional help. Printers are incredibly
                        useful but can sometimes be frustrating when issues
                        arise. The good news is that many common printer
                        problems have simple solutions you can try before
                        calling for professional help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default BlogDetails;
