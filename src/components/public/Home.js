import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

export default class Home extends Component {

    render() {

        return (
            <div className='HomeContainer'>
                < Header loggedin={this.props.loggedin} />
                <div className='banner'>
                  <h1>EVOLVE YOUR MARRIAGE</h1>
                  <h5>Transform a Lonely, Unloving and Unhappy Marriage into a Passionate, Fulfilling, and Thriving Marriage.</h5>
                </div>
                <div className='aboutme'>
                  <p>
                    Hi! I’m Katie, a creator, writer, meditator & determined teacher dedicated to turn dying marriages into thriving marriages. I help wives build a relationship they are passionate about.
                  </p>
                  <p>
                    I’ve created this online educational platform to help women just like you, thrive in your marriage. To go from feeling unfulfilled, unloved, and completely alone in a marriage to feeling full support, love, fulfillment and joy in a marriage you’re excited to share the rest of your life in with a spouse you deeply love. special sauce is helping wives turn a loveless, dying marriage into a thriving marriage, one that they love and are excited to spend the rest of their lives in with a man they love without having to change the man they love.
                  </p>
                  <p>
                    No matter where you are in you’re marriage, I’ll meet you right there…
                  </p>
                </div>
                <div className='subscribe'>
                  Subscribe to My Thriving Wives Newletter
                </div>
                <div className='testimonial'>
                  <h3>What Other Thriving Wives Are Saying</h3>
                  <div className='cardContainer'>
                    <div className='card'>
                      <div className='pic one'></div>
                      <div className='name'>Sarah H.</div>
                      <div className='title'>LETTING GO WAS #1</div>
                      <div className='description'>"I stumbled on this website somehow. Wow. Just wow! I’m absolutely amazed at how much of what I was holding onto that was controlling my entire life. Katie helped me understand letting go a lot differently. Within a few weeks of working with her, I could already see a change in myself and my husband! Nothing else mattered but “letting go of the thought hooks”. I’ve already signed my sister-in-law up for her course because I know she could use this. I cannot praise Katie enough. Thank you thank you!!! Her teachings and techniques have had a profound affect on my marriage."</div>
                    </div>
                    <div className='card'>
                      <div className='pic two'></div>
                      <div className='name'>Brittney S.</div>
                      <div className='title'>FOUND TRUST IN HER HUSBAND</div>
                      <div className='description'>“I didn’t trust my husband to take care of me and the kids. He had one job after another and we could barely make ends meet. When he did make something he’d spend it immediately on a new toy he needed. I was so fed up one day I exploded. I told him a what piece of sh## I thought he was and that I had lost all faith in him as a man. This only made things worse and we ended up having to move into my parents basement for 2 years because he had no job and had lost all confidence in himself. i begin working with Katie, and I'm so glad i did! Within a month my husband found a steady job, with a better salary than he’s ever had and we were able to move into our own space again. I'm so grateful I was able to work with Katie and her staff at Ignite a Path!</div>
                    </div>
                    <div className='card'>
                      <div className='pic three'></div>
                      <div className='name'>Dianne L.</div>
                      <div className='title'>LEARNED HOW TO RE-CONNECT</div>
                      <div className='description'>“You’d hardly guess we were a couple in public. I wasn’t planning on divorce but I was fine with things staying the way they were. But I know he didn’t like our sex life. Or the lack there of. But we wouldn’t talk about it either because that ended in fights and he’d sleep on the couch. After week 3 of Katie's Thrive My Marriage Mastery Program I had the confidence to connect with him and have grown to enjoy the growth process. I owe a lot to Katie. She’s changed my life in so many ways but most importantly my marriage and the intimate relationship I now have with my husband.”</div>
                    </div>
                  </div>
                </div>
                < Footer />
            </div>
        )
    }
}