import React from 'react';
import {useLocation} from "react-router-dom";
// import news1 from '../../vendor/img/news-825x525.jpg';
import news2 from '../../vendor/img/news-350x223-1.jpg';
import news3 from '../../vendor/img/news-350x223-2.jpg';
import news4 from '../../vendor/img/news-350x223-3.jpg';
import news5 from '../../vendor/img/news-350x223-4.jpg';
import news6 from '../../vendor/img/news-350x223-1.jpg';
import news7 from '../../vendor/img/news-350x223-2.jpg';
import news8 from '../../vendor/img/news-350x223-3.jpg';
import news9 from '../../vendor/img/news-350x223-4.jpg';
import news10 from '../../vendor/img/news-350x223-5.jpg';
import ads2 from '../../vendor/img/ads-2.jpg';
import Header from '../Header';
import Footer from '../Footer';


const singlepage = (props) => {
    // const {type} = useParams();
    const {title, content, image, publishDate} = useLocation().state;
    // console.log("promps type" + type);
    // console.log(title, content, image);
  return (
      <>
      <Header />
      
    <div className="breadcrumb-wrap">
    <div className="container">
        <ul className="breadcrumb">
            <li className="breadcrumb-item"><a href="/#">Home</a></li>
            <li className="breadcrumb-item"><a href="/#">News</a></li>
            <li className="breadcrumb-item active">News details</li>
        </ul>
    </div>
</div>

<div className="single-news">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="sn-container">
                    <div className="sn-img">
                        <img src={image} alt="new" />
                    </div>
                    <div className="sn-content">
                        <h1 className="sn-title">{title}</h1>
                        <p className="text-secondary">{publishDate}</p>
                        <p>
                            {content}
                        </p>
                        
                    </div>
                </div>
                <div className="sn-related">
                    <h2>Related News</h2>
                    <div className="row sn-slider">
                        <div className="col-md-4">
                            <div className="sn-img">
                                <img src={news2} alt="new" />
                                <div className="sn-title">
                                    <a href="">Interdum et fames ac ante</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="sn-img">
                                <img src={news3} alt="new" />
                                <div className="sn-title">
                                    <a href="/#">Interdum et fames ac ante</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="sn-img">
                                <img src={news4} alt="new"/>
                                <div className="sn-title">
                                    <a href="/#">Interdum et fames ac ante</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="sn-img">
                                <img src={news5} alt="new" />
                                <div className="sn-title">
                                    <a href="/#">Interdum et fames ac ante</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="sidebar">
                    <div className="sidebar-widget">
                        <h2 className="sw-title">In This Category</h2>
                        <div className="news-list">
                            <div className="nl-item">
                                <div className="nl-img">
                                    <img src={news6} alt="new"/>
                                </div>
                                <div className="nl-title">
                                    <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                </div>
                            </div>
                            <div className="nl-item">
                                <div className="nl-img">
                                    <img src={news7} alt="new"/>
                                </div>
                                <div className="nl-title">
                                    <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                </div>
                            </div>
                            <div className="nl-item">
                                <div className="nl-img">
                                    <img src={news8} alt="new"/>
                                </div>
                                <div className="nl-title">
                                    <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                </div>
                            </div>
                            <div className="nl-item">
                                <div className="nl-img">
                                    <img src={news9} alt="new"/>
                                </div>
                                <div className="nl-title">
                                    <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                </div>
                            </div>
                            <div className="nl-item">
                                <div className="nl-img">
                                    <img src={news10} alt="new"/>
                                </div>
                                <div className="nl-title">
                                    <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="sidebar-widget">
                        <div className="image">
                            <a href="https://htmlcodex.com"><img src={ads2} alt="Image"/></a>
                        </div>
                    </div>
                    
                    <div className="sidebar-widget">
                        <div className="tab-news">
                            <ul className="nav nav-pills nav-justified">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="pill" href="#featured">Featured</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#popular">Popular</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#latest">Latest</a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div id="featured" className="container tab-pane active">
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news2} alt="new"/>
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news3} alt="new"/>
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news4} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news5} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news10} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                </div>
                                <div id="popular" className="container tab-pane fade">
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news5} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news4} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news3} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news2} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news3} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                </div>
                                <div id="latest" className="container tab-pane fade">
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news4} alt="new"/>
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news5} alt="new"/>
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news10} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news5} alt="new" />
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                    <div className="tn-news">
                                        <div className="tn-img">
                                            <img src={news4} alt="new"/>
                                        </div>
                                        <div className="tn-title">
                                            <a href="/#">Lorem ipsum dolor sit amet consec adipis elit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="sidebar-widget">
                        <div className="image">
                            <a href="https://htmlcodex.com"><img src={ads2} alt="Image"/></a>
                        </div>
                    </div>

                    <div className="sidebar-widget">
                        <h2 className="sw-title">News Category</h2>
                        <div className="category">
                            <ul>
                                <li><a href="/#">National</a><span>(98)</span></li>
                                <li><a href="/#">International</a><span>(87)</span></li>
                                <li><a href="/#">Economics</a><span>(76)</span></li>
                                <li><a href="/#">Politics</a><span>(65)</span></li>
                                <li><a href="/#">Lifestyle</a><span>(54)</span></li>
                                <li><a href="/#">Technology</a><span>(43)</span></li>
                                <li><a href="/#">Trades</a><span>(32)</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="sidebar-widget">
                        <div className="image">
                            <a href="https://htmlcodex.com"><img src={ads2} alt="Image"/></a>
                        </div>
                    </div>
                    
                    <div className="sidebar-widget">
                        <h2 className="sw-title">Tags Cloud</h2>
                        <div className="tags">
                            <a href="/#">National</a>
                            <a href="/#">International</a>
                            <a href="/#">Economics</a>
                            <a href="/#">Politics</a>
                            <a href="/#">Lifestyle</a>
                            <a href="/#">Technology</a>
                            <a href="/#">Trades</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />
</>
  );
}

export default singlepage;