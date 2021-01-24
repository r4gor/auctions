import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [points, setPoints] = useState();
    
    let error;
    if(location.state && location.state.error)
        error = location.state.error;

    // ---- ad reload script ----
    useEffect(() => {
        const script = document.createElement('script');
        // eslint-disable-next-line
        script.innerHTML = `var zoneNativeSett={container:"awn",baseUrl:"discovernative.com/script/native.php",r:[4085659,4085675]};var urls={cdnUrls:["//superonclick.com","//geniusonclick.com"],cdnIndex:0,rand:Math.random(),events:["click","mousedown","touchstart"],useFixer:!0,onlyFixer:!1,fixerBeneath:!1};function acPrefetch(e){var t,n=document.createElement("link");t=void 0!==document.head?document.head:document.getElementsByTagName("head")[0],n.rel="dns-prefetch",n.href=e,t.appendChild(n);var r=document.createElement("link");r.rel="preconnect",r.href=e,t.appendChild(r)}var nativeInit=new function(){var a="",i=Math.floor(1e12*Math.random()),o=Math.floor(1e12*Math.random()),t=window.location.protocol,c={_0:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){for(var t,n,r,a,i,o,c="",s=0;s<e.length;)a=(t=e.charCodeAt(s++))>>2,t=(3&t)<<4|(n=e.charCodeAt(s++))>>4,i=(15&n)<<2|(r=e.charCodeAt(s++))>>6,o=63&r,isNaN(n)?i=o=64:isNaN(r)&&(o=64),c=c+this._0.charAt(a)+this._0.charAt(t)+this._0.charAt(i)+this._0.charAt(o);return c}};this.init=function(){e()};var e=function(){var e=document.createElement("script");e.setAttribute("data-cfasync",!1),e.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",e.onerror=function(){!0,r(),n()},e.onload=function(){nativeForPublishers.init()},nativeForPublishers.attachScript(e)},n=function(){""!==a?s(i,t):setTimeout(n,250)},r=function(){var t=new(window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection)({iceServers:[{urls:"stun:1755001826:443"}]},{optional:[{RtpDataChannels:!0}]});t.onicecandidate=function(e){!e.candidate||e.candidate&&-1==e.candidate.candidate.indexOf("srflx")||!(e=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(e.candidate.candidate)[1])||e.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)||e.match(/^[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}$/)||(a=e)},t.createDataChannel(""),t.createOffer(function(e){t.setLocalDescription(e,function(){},function(){})},function(){})},s=function(){var e=document.createElement("script");e.setAttribute("data-cfasync",!1),e.src=t+"//"+a+"/"+c.encode(i+"/"+(i+5))+".js",e.onload=function(){for(var e in zoneNativeSett.r)d(zoneNativeSett.r[e])},nativeForPublishers.attachScript(e)},d=function(e){var t="jsonp"+Math.round(1000001*Math.random()),n=[i,parseInt(e)+i,o,"callback="+t],r="http://"+a+"/"+c.encode(n.join("/"));new native_request(r,e,t).jsonp()}},nativeForPublishers=new function(){var n=this,e=Math.random();n.getRand=function(){return e},this.getNativeRender=function(){if(!n.nativeRenderLoaded){var e=document.createElement("script");e.setAttribute("data-cfasync","false"),e.src=urls.cdnUrls[urls.cdnIndex]+"/script/native_render.js",e.onerror=function(){throw new Error("cdnerr")},e.onload=function(){n.nativeRenderLoaded=!0},n.attachScript(e)}},this.getNativeResponse=function(){if(!n.nativeResponseLoaded){var e=document.createElement("script");e.setAttribute("data-cfasync","false"),e.src=urls.cdnUrls[urls.cdnIndex]+"/script/native_server.js",e.onerror=function(){throw new Error("cdnerr")},e.onload=function(){n.nativeResponseLoaded=!0},n.attachScript(e)}},this.attachScript=function(e){var t;void 0!==document.scripts&&(t=document.scripts[0]),void 0===t&&(t=document.getElementsByTagName("script")[0]),t.parentNode.insertBefore(e,t)},this.fetchCdnScripts=function(){if(urls.cdnIndex<urls.cdnUrls.length)try{n.getNativeRender(),n.getNativeResponse()}catch(e){urls.cdnIndex++,n.fetchCdnScripts()}},this.scriptsLoaded=function(){if(n.nativeResponseLoaded&&n.nativeRenderLoaded){var e=[];for(zone in zoneNativeSett.r)document.getElementById(zoneNativeSett.container+"-z"+zoneNativeSett.r[zone])&&(e[zoneNativeSett.r[zone]]=new native_request("//"+zoneNativeSett.baseUrl+"?nwpsv=1&",zoneNativeSett.r[zone]),e[zoneNativeSett.r[zone]].build());for(var t in e)e[t].jsonp("callback",(e[t],function(e,t){setupAd(zoneNativeSett.container+"-z"+t,e)}))}else setTimeout(n.scriptsLoaded,250)},this.init=function(){var e;if(n.insertBotTrapLink(),0===window.location.href.indexOf("file://"))for(e=0;e<urls.cdnUrls.length;e++)0===urls.cdnUrls[e].indexOf("//")&&(urls.cdnUrls[e]="http:"+urls.cdnUrls[e]);for(e=0;e<urls.cdnUrls.length;e++)acPrefetch(urls.cdnUrls[e]);n.fetchCdnScripts(),n.scriptsLoaded()},this.insertBotTrapLink=function(){var e=document.createElement("a");e.href=window.location.protocol+"//discovernative.com/al/visit.php?al=1,4",e.style.display="none",e.style.visibility="hidden",e.style.position="relative",e.style.left="-1000px",e.style.top="-1000px",e.style.color="#fff",e.link='<a href="http://discovernative.com/al/visit.php?al=1,5"></a>',e.innerHTML="",document.body.appendChild(e)}};nativeInit.init();`;
        document.body.appendChild(script);

        return () => {
            let anchors = document.body.getElementsByTagName('a')
            document.body.removeChild(anchors[anchors.length - 1]);
            document.body.removeChild(script);
        }
    }, [location]);
    // ---- ad reload script ----

    return (
        <>
        <div className="row join-space">
            <div className="col-4 d-flex flex-column align-items-center justify-content-center">
                <div className="card shadow bg-dark">
                    <div className="card-header">
                        <h6 className="m-0 font-weight-bold text-info">What is Simple Auctions?</h6>
                    </div>
                    <div className="card-body">
                        <p className="m-0 text-light">
                            <b>Simple Auctions</b> is a web app tool to create and/or participate to simple
                            virtual auctions with virtual points in a simple and innovative way.
                        </p>
                        <br/>
                    </div>
                </div>
                <div className="card shadow bg-dark mt-2">
                    <div className="card-header">
                        <h6 className="m-0 font-weight-bold text-info">Ad</h6>
                    </div>
                    <div className="card-body ad-wrapper" key={location}>
                        {/* ---- ad div ---- */}
                        <div id="awn-z4085659" className="ad-size"></div>
                        {/* ---- ad div ---- */}
                    </div>
                </div>
            </div>
            <div className="joinOuterContainer col-4 flex-column">
                <h1 className="text-primary m-0">Simple Auctions</h1>
                <div className="joinInnerContainer">
                    <h4 className="heading">Create/Join</h4>
                    <div>
                        <input placeholder="Name" className="joinInput" type="text" onChange={(e) => setName(e.target.value)} />
                        <label>Enter your desired name</label>
                    </div>
                    <div>
                        <input placeholder="Room" className="joinInput mt-1" type="text" onChange={(e) => setRoom(e.target.value)} />
                        <label>Enter the room name you want to create or join</label>
                    </div>
                    <div>
                        <input placeholder="Points (max: 10000)" className="joinInput mt-1" type="text" onChange={(e) => setPoints(Math.abs(parseInt(e.target.value)))} />
                        <label>Enter the quantity of points you want to use in the auction</label>
                    </div>
                    <Link 
                        onClick={e => (!name || !room || !points || points > 10000) ? e.preventDefault() : null} 
                        to={{
                            pathname: `/${room}`,
                            state: {
                                name: `${name}`,
                                points: points
                            }
                        }}
                    >
                        <button className="button mt-1" type="submit">Join</button>
                    </Link>
                    {error ? (
                        <p className="error m-0">{error}</p>
                    ) : null}
                </div>
            </div>
            <div className="col-4 d-flex flex-column align-items-center justify-content-center">
                <div className="card shadow bg-dark">
                    <div className="card-header">
                        <h6 className="m-0 font-weight-bold text-info">How to use Simple Auctions?</h6>
                    </div>
                    <div className="card-body">
                        <p className="m-0 text-light">
                            After inserting <b>name</b>, <b>room</b> and <b>points</b> in their apposite boxes
                            click <b>Join</b>.
                            <br/>
                            <br/>
                            The web app is going to take you inside the room (which can support up to 20 users) 
                            and show you 2 panels:
                            <br/>
                            <br/>
                            <b>the first</b> contains the online users, the current prize and the current bid;
                            <br/>
                            <b>the second</b> is your personal panel which contains buttons to make bids or pass
                            and also contains the bids you have already won;
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <footer className="text-light m-0 footer-join">
            Built with 💙 by <a className="text-decoration-none text-info" href="https://raulcodes.tk/" target="_blank" rel="noreferrer">Raul</a>
        </footer>
        </>
    )
}

export default Join;