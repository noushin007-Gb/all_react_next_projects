import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const UserHome = (props) => {
  return (
    <>
      <div className="user-home-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="user-home-user-home1">
          <div className="user-home-user-home2">
            <div className="user-home-user-dashboard-form">
              <div className="user-home-frame201">
                <div className="user-home-dashboard-clicked-btn">
                  <Link href="/user-dashboard">
                  <a>
                    <img
                      src="/external/element22i4095-hcuj.svg"
                      alt="element22I4095" 
                      className="user-home-element22"
                      style={{ cursor: 'pointer' }}
                    />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="user-home-user-exit-btn">
                <img
                  src="/external/logout3i4095-5sm.svg"
                  alt="logout3I4095"
                  className="user-home-logout3"
                />
              </div>
              <div className="user-home-frame208">
                <span className="user-home-text100">12:29 PM</span>
                <span className="user-home-text101">Sep 02, 2023</span>
                <img
                  src="/external/setting21i4095-btkb.svg"
                  alt="setting21I4095"
                  className="user-home-setting21"
                />
                <img
                  src="/external/user1i4095-zz92.svg"
                  alt="user1I4095"
                  className="user-home-user1"
                />
                <span className="user-home-text102">
                  Noushin
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="user-home-text103">User</span>
                <img
                  src="/external/line16i4095-ipl.svg"
                  alt="Line16I4095"
                  className="user-home-line16"
                />
              </div>
              <img
                src="/external/downloadremovebgpreview4i4095-1ga-200h.png"
                alt="downloadremovebgpreview4I4095"
                className="user-home-downloadremovebgpreview4"
              />
              <div className="user-home-image">
                <div className="user-home-depth7-frame010">
                  <div className="user-home-depth8-frame010"></div>
                  <div className="user-home-depth8-frame110">
                    <span className="user-home-text104">
                      Start your day with a book
                    </span>
                  </div>
                </div>
                <span className="user-home-text105">Good morning, Noushin</span>
                <div className="user-home-group133545">
                  <div className="user-home-group133546">
                    <div className="user-home-group133550">
                      <img
                        src="/external/rectangle8i4095-id7-200h.png"
                        alt="Rectangle8I4095"
                        className="user-home-rectangle81"
                      />
                      <span className="user-home-text106">All</span>
                      <img
                        src="/external/polygon1i4095-fm6h.svg"
                        alt="Polygon1I4095"
                        className="user-home-polygon1"
                      />
                      <img
                        src="/external/barcodescanneri4095-ongf.svg"
                        alt="barcodescannerI4095"
                        className="user-home-barcodescanner"
                      />
                      <img
                        src="/external/searchi4095-52j9.svg"
                        alt="SearchI4095"
                        className="user-home-search"
                      />
                      <img
                        src="/external/line1i4095-tei.svg"
                        alt="Line1I4095"
                        className="user-home-line1"
                      />
                      <span className="user-home-text107">Search</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user-home-group6">
              <Link href="/book-details" passHref>
        <a className="user-home-text108" style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
          New Releases
        </a>
      </Link>
                <span className="user-home-text109">
                  <span className="user-home-text110">
                    Home
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <Link href="/user-dashboard">
        <span>/ Dashboard </span>
      </Link>
      <a href="https://lms.elearning23.com/login/index.php" target="_blank" rel="noopener noreferrer">
        <span>/ LMS Courses</span>
      </a>
                </span>
              </div>
              <div className="user-home-group81">
                <div className="user-home-depth8-frame011"></div>
                <div className="user-home-depth8-frame210"></div>
              </div>
              <div className="user-home-group9">
                <div className="user-home-depth8-frame012"></div>
                <div className="user-home-depth8-frame111"></div>
              </div>
              <div className="user-home-main-area">
                <span className="user-home-text112">Recent Readings</span>
                <span className="user-home-text113">Show All</span>
                <span className="user-home-text114">
                  Journals, Articles &amp; Paper Publications
                </span>
                <span className="user-home-text115">News</span>
                <div className="user-home-recommended-book-list1">
                  <div className="user-home-frame191">
                    <img
                      src="/external/rectangle12i4095-6h8a-200w.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1210"
                    />
                    <div className="user-home-frame2910">
                    <Link href="/book-details" passHref>
        <a className="user-home-text116" style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
          Don’t Make Me Think
        </a>
      </Link>
                      <span className="user-home-text117">
                        Steve Krug, 2000
                      </span>
                      <span className="user-home-text118">
                        <span className="user-home-text119">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame2911">
                    <img
                      src="/external/rectangle12i4095-787-200w.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1211"
                    />
                    <div className="user-home-frame2912">
                      <span className="user-home-text121">
                        The Design of Every..
                      </span>
                      <span className="user-home-text122">
                        Don Norman, 1988
                      </span>
                      <span className="user-home-text123">
                        <span className="user-home-text124">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame301">
                    <img
                      src="/external/rectangle12i4095-hjbs-200w.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1212"
                    />
                    <div className="user-home-frame2913">
                      <span className="user-home-text126">
                        Sprint : How to solve...
                      </span>
                      <span className="user-home-text127">
                        Jake Knapp, 2000
                      </span>
                      <span className="user-home-text128">
                        <span className="user-home-text129">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame311">
                    <img
                      src="/external/rectangle12i4095-z44-200w.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1213"
                    />
                    <div className="user-home-frame2914">
                      <span className="user-home-text131">
                        Learn UX : Design Gr...
                      </span>
                      <span className="user-home-text132">
                        Jeff Gothelf, 2016
                      </span>
                      <span className="user-home-text133">
                        <span className="user-home-text134">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame321">
                    <img
                      src="/external/rectangle12i4095-lmuf-200w.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1214"
                    />
                    <div className="user-home-frame2915">
                      <span className="user-home-text136">
                        The Road to React
                      </span>
                      <span className="user-home-text137">
                        Steve Krug, 2000
                      </span>
                      <span className="user-home-text138">
                        <span className="user-home-text139">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame331">
                    <img
                      src="/external/rectangle12i4095-f144-200w.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1215"
                    />
                    <span className="user-home-text141">Rich Dad Poor Dad</span>
                    <span className="user-home-text142">
                      Robert T.Kiyo, 1997
                    </span>
                    <img
                      src="/external/unionstrokei4095-mo8.svg"
                      alt="UnionStrokeI4095"
                      className="user-home-union-stroke1"
                    />
                    <img
                      src="/external/unionstrokei4095-adni.svg"
                      alt="UnionStrokeI4095"
                      className="user-home-union-stroke2"
                    />
                    <span className="user-home-text143">
                      <span className="user-home-text144">5</span>
                      <span>/5</span>
                    </span>
                  </div>
                  <div className="user-home-frame341">
                    <img
                      src="/external/rectangle12i4095-wl0d-200w.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1216"
                    />
                    <span className="user-home-text146">
                      Harry Potter and The...
                    </span>
                    <span className="user-home-text147">
                      J.K. Rowling, 2002
                    </span>
                    <span className="user-home-text148">
                      <span className="user-home-text149">4.9</span>
                      <span>/5</span>
                    </span>
                    <img
                      src="/external/unionstrokei4095-8gqx.svg"
                      alt="UnionStrokeI4095"
                      className="user-home-union-stroke3"
                    />
                  </div>
                  <div className="user-home-frame361">
                    <img
                      src="/external/rectangle12i4095-hqyq-200w.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1217"
                    />
                    <img
                      src="/external/rectangle13i4095-4zms-200w.png"
                      alt="Rectangle13I4095"
                      className="user-home-rectangle13"
                    />
                    <span className="user-home-text151">The Road to React</span>
                    <span className="user-home-text152">Steve Krug, 2000</span>
                    <span className="user-home-text153">
                      <span className="user-home-text154">4.5</span>
                      <span>/5</span>
                    </span>
                    <img
                      src="/external/unionstrokei4095-cl1a.svg"
                      alt="UnionStrokeI4095"
                      className="user-home-union-stroke4"
                    />
                  </div>
                  <div className="user-home-frame38">
                    <img
                      src="/external/rectangle12i4095-o8li-200w.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1218"
                    />
                    <span className="user-home-text156">
                      Sprint : How to solve...
                    </span>
                    <span className="user-home-text157">Jake Knapp, 2000</span>
                    <span className="user-home-text158">
                      <span className="user-home-text159">4.5</span>
                      <span>/5</span>
                    </span>
                    <img
                      src="/external/vector3i4095-bue.svg"
                      alt="Vector3I4095"
                      className="user-home-vector3"
                    />
                    <img
                      src="/external/unionstrokei4095-yph6.svg"
                      alt="UnionStrokeI4095"
                      className="user-home-union-stroke5"
                    />
                  </div>
                  <div className="user-home-frame371">
                    <img
                      src="/external/rectangle12i4095-lvbo-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1219"
                    />
                    <div className="user-home-frame2916">
                      <span className="user-home-text161">
                        The Road to React
                      </span>
                      <span className="user-home-text162">
                        Steve Krug, 2000
                      </span>
                      <span className="user-home-text163">
                        <span className="user-home-text164">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame351">
                    <img
                      src="/external/rectangle12i4095-yunh-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1220"
                    />
                    <div className="user-home-frame2917">
                      <span className="user-home-text166">
                        You Don’t Know JS: S..
                      </span>
                      <span className="user-home-text167">
                        Kyle Simpson, 2014
                      </span>
                      <span className="user-home-text168">
                        <span className="user-home-text169">4.9</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="user-home-recommended-book-list2">
                  <div className="user-home-frame192">
                    <img
                      src="/external/rectangle12i4095-dw0d-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1221"
                    />
                    <div className="user-home-frame2918">
                      <span className="user-home-text171">
                        Don’t Make Me think
                      </span>
                      <span className="user-home-text172">
                        Steve Krug, 2000
                      </span>
                      <span className="user-home-text173">
                        <span className="user-home-text174">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame2919">
                    <img
                      src="/external/rectangle12i4095-eta-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1222"
                    />
                    <div className="user-home-frame2920">
                      <span className="user-home-text176">
                        The Design of Every..
                      </span>
                      <span className="user-home-text177">
                        Don Norman, 1988
                      </span>
                      <span className="user-home-text178">
                        <span className="user-home-text179">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame302">
                    <img
                      src="/external/rectangle12i4095-2dz-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1223"
                    />
                    <div className="user-home-frame2921">
                      <span className="user-home-text181">
                        Sprint : How to solve...
                      </span>
                      <span className="user-home-text182">
                        Jake Knapp, 2000
                      </span>
                      <span className="user-home-text183">
                        <span className="user-home-text184">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame312">
                    <img
                      src="/external/rectangle12i4095-z4af-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1224"
                    />
                    <div className="user-home-frame2922">
                      <span className="user-home-text186">
                        Learn UX : Design Gr...
                      </span>
                      <span className="user-home-text187">
                        Jeff Gothelf, 2016
                      </span>
                      <span className="user-home-text188">
                        <span className="user-home-text189">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame322">
                    <img
                      src="/external/rectangle12i4095-h2n9-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1225"
                    />
                    <div className="user-home-frame2923">
                      <span className="user-home-text191">
                        The Road to React
                      </span>
                      <span className="user-home-text192">
                        Steve Krug, 2000
                      </span>
                      <span className="user-home-text193">
                        <span className="user-home-text194">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame332">
                    <img
                      src="/external/rectangle12i4095-48h9-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1226"
                    />
                    <div className="user-home-frame2924">
                      <span className="user-home-text196">
                        Rich Dad Poor Dad
                      </span>
                      <span className="user-home-text197">
                        Robert T.Kiyosaki, 1997
                      </span>
                      <span className="user-home-text198">
                        <span className="user-home-text199">5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame342">
                    <img
                      src="/external/rectangle12i4095-quvj-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1227"
                    />
                    <div className="user-home-frame2925">
                      <span className="user-home-text201">
                        Harry Potter and The ...
                      </span>
                      <span className="user-home-text202">
                        J.K. Rowling, 2002
                      </span>
                      <span className="user-home-text203">
                        <span className="user-home-text204">4.9</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame352">
                    <img
                      src="/external/rectangle12i4095-ggdh-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1228"
                    />
                    <div className="user-home-frame2926">
                      <span className="user-home-text206">
                        You Don’t Know JS: S..
                      </span>
                      <span className="user-home-text207">
                        Kyle Simpson, 2014
                      </span>
                      <span className="user-home-text208">
                        <span className="user-home-text209">4.9</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="user-home-recommended-book-list3">
                  <div className="user-home-frame193">
                    <img
                      src="/external/rectangle12i4095-jddq-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1229"
                    />
                    <div className="user-home-frame2927">
                      <span className="user-home-text211">
                        Don’t Make Me think
                      </span>
                      <span className="user-home-text212">
                        Steve Krug, 2000
                      </span>
                      <span className="user-home-text213">
                        <span className="user-home-text214">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame2928">
                    <img
                      src="/external/rectangle12i4095-vv2f-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1230"
                    />
                    <div className="user-home-frame2929">
                      <span className="user-home-text216">
                        The Design of Every..
                      </span>
                      <span className="user-home-text217">
                        Don Norman, 1988
                      </span>
                      <span className="user-home-text218">
                        <span className="user-home-text219">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame303">
                    <img
                      src="/external/rectangle12i4095-ug3i-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1231"
                    />
                    <div className="user-home-frame2930">
                      <span className="user-home-text221">
                        Sprint : How to solve...
                      </span>
                      <span className="user-home-text222">
                        Jake Knapp, 2000
                      </span>
                      <span className="user-home-text223">
                        <span className="user-home-text224">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame313">
                    <img
                      src="/external/rectangle12i4095-v0d-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1232"
                    />
                    <div className="user-home-frame2931">
                      <span className="user-home-text226">
                        Learn UX : Design Gr...
                      </span>
                      <span className="user-home-text227">
                        Jeff Gothelf, 2016
                      </span>
                      <span className="user-home-text228">
                        <span className="user-home-text229">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame323">
                    <img
                      src="/external/rectangle12i4095-po0l-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1233"
                    />
                    <div className="user-home-frame2932">
                      <span className="user-home-text231">
                        The Road to React
                      </span>
                      <span className="user-home-text232">
                        Steve Krug, 2000
                      </span>
                      <span className="user-home-text233">
                        <span className="user-home-text234">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame333">
                    <img
                      src="/external/rectangle12i4095-8v6-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1234"
                    />
                    <div className="user-home-frame2933">
                      <span className="user-home-text236">
                        Rich Dad Poor Dad
                      </span>
                      <span className="user-home-text237">
                        Robert T.Kiyosaki, 1997
                      </span>
                      <span className="user-home-text238">
                        <span className="user-home-text239">5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame343">
                    <img
                      src="/external/rectangle12i4095-m2in-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1235"
                    />
                    <div className="user-home-frame2934">
                      <span className="user-home-text241">
                        Harry Potter and The ...
                      </span>
                      <span className="user-home-text242">
                        J.K. Rowling, 2002
                      </span>
                      <span className="user-home-text243">
                        <span className="user-home-text244">4.9</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame353">
                    <img
                      src="/external/rectangle12i4095-js4s-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1236"
                    />
                    <div className="user-home-frame2935">
                      <span className="user-home-text246">
                        You Don’t Know JS: S..
                      </span>
                      <span className="user-home-text247">
                        Kyle Simpson, 2014
                      </span>
                      <span className="user-home-text248">
                        <span className="user-home-text249">4.9</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="user-home-recommended-book-list4">
                  <div className="user-home-frame194">
                    <img
                      src="/external/rectangle12i4095-mp2l-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1237"
                    />
                    <div className="user-home-frame2936">
                      <span className="user-home-text251">14 Mar 2023</span>
                      <span className="user-home-text252">The Hindu News</span>
                      <span className="user-home-text253">
                        <span className="user-home-text254">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame362">
                    <img
                      src="/external/rectangle12i4095-hyoc-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1238"
                    />
                    <div className="user-home-frame2937">
                      <span className="user-home-text256">14 Mar 2023</span>
                      <span className="user-home-text257">TOI News</span>
                      <span className="user-home-text258">
                        <span className="user-home-text259">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                  <div className="user-home-frame372">
                    <img
                      src="/external/rectangle12i4095-s8ke-200h.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1239"
                    />
                    <div className="user-home-frame2938">
                      <span className="user-home-text261">14 Mar 2023</span>
                      <span className="user-home-text262">Deccan Cronicle</span>
                      <span className="user-home-text263">
                        <span className="user-home-text264">4.5</span>
                        <span>/5</span>
                      </span>
                    </div>
                  </div>
                </div>
                <span className="user-home-text266">Recommended for You</span>
                <div className="user-home-news-new-arrivals">
                  <img
                    src="/external/rectangle9i4095-49a-200w.png"
                    alt="Rectangle9I4095"
                    className="user-home-rectangle9"
                  />
                  <div className="user-home-new-arivals">
                    <div className="user-home-frame39">
                      <div className="user-home-arrivals">
                        <div className="user-home-frame195">
                          <img
                            src="/external/rectangle12i4095-7sn8-200w.png"
                            alt="Rectangle12I4095"
                            className="user-home-rectangle1240"
                          />
                        </div>
                        <div className="user-home-frame202">
                          <img
                            src="/external/rectangle12i4095-ntkb-200w.png"
                            alt="Rectangle12I4095"
                            className="user-home-rectangle1241"
                          />
                        </div>
                        <div className="user-home-frame211">
                          <img
                            src="/external/rectangle12i4095-2y2-200w.png"
                            alt="Rectangle12I4095"
                            className="user-home-rectangle1242"
                          />
                        </div>
                        <div className="user-home-frame221">
                          <img
                            src="/external/rectangle12i4095-qi2k-200w.png"
                            alt="Rectangle12I4095"
                            className="user-home-rectangle1243"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="user-home-latest-news">
                    <span className="user-home-text267">News Rack</span>
                    <div className="user-home-news-rack-area">
                      <div className="user-home-news">
                        <div className="user-home-frame196">
                          <img
                            src="/external/rectangle12i4095-cdmg-200h.png"
                            alt="Rectangle12I4095"
                            className="user-home-rectangle1244"
                          />
                        </div>
                        <div className="user-home-frame203">
                          <img
                            src="/external/rectangle12i4095-0cc-200h.png"
                            alt="Rectangle12I4095"
                            className="user-home-rectangle1245"
                          />
                        </div>
                        <div className="user-home-frame212">
                          <img
                            src="/external/rectangle12i4095-v3sq-200h.png"
                            alt="Rectangle12I4095"
                            className="user-home-rectangle1246"
                          />
                        </div>
                        <div className="user-home-frame222">
                          <img
                            src="/external/rectangle12i4095-tfz9-200h.png"
                            alt="Rectangle12I4095"
                            className="user-home-rectangle1247"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="user-home-frame197">
                    <img
                      src="/external/rectangle12i4095-53jb-200w.png"
                      alt="Rectangle12I4095"
                      className="user-home-rectangle1248"
                    />
                  </div>
                  <img
                    src="/external/vector2i4095-fsj.svg"
                    alt="Vector2I4095"
                    className="user-home-vector2"
                  />
                </div>
                <div className="user-home-mini-caurosel">
                  <div className="user-home-group82">
                    <span className="user-home-text268">Today’s Quote</span>
                    <span className="user-home-text269">
                      “There is more treasure in books than in all the pirate’s
                      loot on Treasure Island.”
                    </span>
                    <span className="user-home-text270">-Walt Disney</span>
                  </div>
                  <div className="user-home-frame373">
                    <img
                      src="/external/ellipse14i4095-yf36-200h.png"
                      alt="Ellipse14I4095"
                      className="user-home-ellipse14"
                    />
                    <img
                      src="/external/ellipse13i4095-mtc-200h.png"
                      alt="Ellipse13I4095"
                      className="user-home-ellipse13"
                    />
                    <img
                      src="/external/ellipse12i4095-crv-200h.png"
                      alt="Ellipse12I4095"
                      className="user-home-ellipse12"
                    />
                    <img
                      src="/external/ellipse11i4095-7fl-200h.png"
                      alt="Ellipse11I4095"
                      className="user-home-ellipse11"
                    />
                  </div>
                </div>
              </div>
              <div className="user-home-frame236">
                <span className="user-home-text271">Book Request</span>
              </div>
              <div className="user-home-depth4-frame41">
                <div className="user-home-depth5-frame0">
                  <img
                    src="/external/heroiconssolidhearti4095-c05q.svg"
                    alt="heroiconssolidheartI4095"
                    className="user-home-heroiconssolidheart1"
                  />
                  <div className="user-home-heroiconssolidheart2"></div>
                  <img
                    src="/external/heroiconssolidhearti4095-9l2n.svg"
                    alt="heroiconssolidheartI4095"
                    className="user-home-heroiconssolidheart3"
                  />
                  <img
                    src="/external/heroiconssolidhearti4095-26s.svg"
                    alt="heroiconssolidheartI4095"
                    className="user-home-heroiconssolidheart4"
                  />
                  <img
                    src="/external/heroiconssolidhearti4095-n9k.svg"
                    alt="heroiconssolidheartI4095"
                    className="user-home-heroiconssolidheart5"
                  />
                  <img
                    src="/external/heroiconssolidhearti4095-t2m.svg"
                    alt="heroiconssolidheartI4095"
                    className="user-home-heroiconssolidheart6"
                  />
                </div>
                <div className="user-home-depth5-frame11">
                  <div className="user-home-depth6-frame01">
                    <div className="user-home-depth7-frame011"></div>
                    <div className="user-home-depth7-frame11">
                      <div className="user-home-depth8-frame013">
                        <span className="user-home-text272">
                          Little Fires Everywhere
                        </span>
                      </div>
                      <div className="user-home-depth8-frame112">
                        <span className="user-home-text273">Celeste Ng</span>
                      </div>
                      <div className="user-home-depth8-frame211">
                        <span className="user-home-text274">
                          4.5 (4,321 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="user-home-depth6-frame11">
                    <div className="user-home-depth7-frame012"></div>
                    <div className="user-home-depth7-frame12">
                      <div className="user-home-depth8-frame014">
                        <span className="user-home-text275">
                          The Silent Patient
                        </span>
                      </div>
                      <div className="user-home-depth8-frame113">
                        <span className="user-home-text276">
                          Alex Michaelides
                        </span>
                      </div>
                      <div className="user-home-depth8-frame212">
                        <span className="user-home-text277">
                          4.5 (3,210 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="user-home-depth6-frame21">
                    <div className="user-home-depth7-frame013"></div>
                    <div className="user-home-depth7-frame13">
                      <div className="user-home-depth8-frame015">
                        <span className="user-home-text278">
                          The Glass Hotel
                        </span>
                      </div>
                      <div className="user-home-depth8-frame114">
                        <span className="user-home-text279">
                          Emily St. John Mandel
                        </span>
                      </div>
                      <div className="user-home-depth8-frame213">
                        <span className="user-home-text280">
                          4.5 (2,109 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="user-home-depth6-frame31">
                    <div className="user-home-depth7-frame014"></div>
                    <div className="user-home-depth7-frame14">
                      <div className="user-home-depth8-frame016">
                        <span className="user-home-text281">
                          Such a Fun Age
                        </span>
                      </div>
                      <div className="user-home-depth8-frame115">
                        <span className="user-home-text282">Kiley Reid</span>
                      </div>
                      <div className="user-home-depth8-frame214">
                        <span className="user-home-text283">
                          4.5 (1,234 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="user-home-depth6-frame41">
                    <div className="user-home-depth7-frame015"></div>
                    <div className="user-home-depth7-frame15">
                      <div className="user-home-depth8-frame017">
                        <span className="user-home-text284">Normal People</span>
                      </div>
                      <div className="user-home-depth8-frame116">
                        <span className="user-home-text285">Sally Rooney</span>
                      </div>
                      <div className="user-home-depth8-frame215">
                        <span className="user-home-text286">
                          4.5 (1,098 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="/external/rectangle15i4095-1mduh.svg"
                alt="Rectangle15I4095"
                className="user-home-rectangle15"
              />
              <span className="user-home-text287">Show All</span>
              <div className="user-home-depth4-frame42">
                <div className="user-home-depth5-frame12">
                  <div className="user-home-depth6-frame02">
                    <div className="user-home-depth7-frame016"></div>
                    <div className="user-home-depth7-frame16">
                      <div className="user-home-depth8-frame018">
                        <span className="user-home-text288">
                          Little Fires Everywhere
                        </span>
                      </div>
                      <div className="user-home-depth8-frame117">
                        <span className="user-home-text289">Celeste Ng</span>
                      </div>
                      <div className="user-home-depth8-frame216">
                        <span className="user-home-text290">
                          4.5 (4,321 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="user-home-depth6-frame12">
                    <div className="user-home-depth7-frame017"></div>
                    <div className="user-home-depth7-frame17">
                      <div className="user-home-depth8-frame019">
                        <span className="user-home-text291">
                          The Silent Patient
                        </span>
                      </div>
                      <div className="user-home-depth8-frame118">
                        <span className="user-home-text292">
                          Alex Michaelides
                        </span>
                      </div>
                      <div className="user-home-depth8-frame217">
                        <span className="user-home-text293">
                          4.5 (3,210 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="user-home-depth6-frame22">
                    <div className="user-home-depth7-frame018"></div>
                    <div className="user-home-depth7-frame18">
                      <div className="user-home-depth8-frame020">
                        <span className="user-home-text294">
                          The Glass Hotel
                        </span>
                      </div>
                      <div className="user-home-depth8-frame119">
                        <span className="user-home-text295">
                          Emily St. John Mandel
                        </span>
                      </div>
                      <div className="user-home-depth8-frame218">
                        <span className="user-home-text296">
                          4.5 (2,109 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="user-home-depth6-frame32">
                    <div className="user-home-depth7-frame019"></div>
                    <div className="user-home-depth7-frame19">
                      <div className="user-home-depth8-frame021">
                        <span className="user-home-text297">
                          Such a Fun Age
                        </span>
                      </div>
                      <div className="user-home-depth8-frame120">
                        <span className="user-home-text298">Kiley Reid</span>
                      </div>
                      <div className="user-home-depth8-frame219">
                        <span className="user-home-text299">
                          4.5 (1,234 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="user-home-depth6-frame42"></div>
                </div>
              </div>
              <div className="user-home-bento-grid">
                <div className="user-home-frame11"></div>
                <div className="user-home-frame16">
                  <span className="user-home-text300">BOOK NAME</span>
                  <span className="user-home-text301">Author Name</span>
                  <span className="user-home-text302">Lorem</span>
                </div>
                <div className="user-home-group133554">
                  <img
                    src="/external/rectangle17i4095-wu0c-400h.png"
                    alt="Rectangle17I4095"
                    className="user-home-rectangle17"
                  />
                  <div className="user-home-frame12"></div>
                  <div className="user-home-component16"></div>
                </div>
              </div>
              <img
                src="/external/rectangle8i4095-whnb-200h.png"
                alt="Rectangle8I4095"
                className="user-home-rectangle82"
              />
              <img
                src="/external/image2412205167789441i4095-a5g-400h.png"
                alt="IMAGE2412205167789441I4095"
                className="user-home-image2412205167789441"
              />
              <Link href="/book-club">
              <span className="user-home-text303">BS23 BOOK CLUB &gt;&gt;</span>
      </Link>
             
              <div className="user-home-footer">
                <div className="user-home-workwithus">
                  <div className="user-home-frame76"></div>
                </div>
                <div className="user-home-plat-store"></div>
                <img
                  src="/external/vector22i4095-wayj.svg"
                  alt="Vector22I4095"
                  className="user-home-vector22"
                />
              </div>
              <span className="user-home-text304">Popular Books</span>
            </div>
            <img
              src="/external/vectori4095-mylc.svg"
              alt="VectorI4095"
              className="user-home-vector"
            />
            <img
              src="/external/rectangle14i4095-dnpe.svg"
              alt="Rectangle14I4095"
              className="user-home-rectangle14"
            />
            <span className="user-home-text305">
              <span className="user-home-text306">Request for a BOOK?</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="user-home-group211">
              <img
                src="/external/rectangle2i4095-etxa-200w.png"
                alt="Rectangle2I4095"
                className="user-home-rectangle21"
              />
              <img
                src="/external/rectangle19i4095-6nnj-300h.png"
                alt="Rectangle19I4095"
                className="user-home-rectangle19"
              />
              <img
                src="/external/rectangle3i4095-0ibo-200w.png"
                alt="Rectangle3I4095"
                className="user-home-rectangle31"
              />
              <img
                src="/external/rectangle4i4095-5y48-200w.png"
                alt="Rectangle4I4095"
                className="user-home-rectangle41"
              />
              <img
                src="/external/rectangle18i4095-9fm-200w.png"
                alt="Rectangle18I4095"
                className="user-home-rectangle18"
              />
              <div className="user-home-group212">
                <img
                  src="/external/rectangle2i4095-tfla-200w.png"
                  alt="Rectangle2I4095"
                  className="user-home-rectangle22"
                />
                <img
                  src="/external/rectangle3i4095-yvx-200w.png"
                  alt="Rectangle3I4095"
                  className="user-home-rectangle32"
                />
                <img
                  src="/external/rectangle4i4095-k6hv-200w.png"
                  alt="Rectangle4I4095"
                  className="user-home-rectangle42"
                />
              </div>
            </div>
            <span className="user-home-text308">Popular books</span>
            <div className="user-home-scrollbar">
              <img
                src="/external/arrowi4095-oo5.svg"
                alt="ArrowI4095"
                className="user-home-arrow1"
              />
              <img
                src="/external/arrowi4095-7ih8.svg"
                alt="ArrowI4095"
                className="user-home-arrow2"
              />
              <div className="user-home-thumb">
                <span className="user-home-text309">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <span className="user-home-text314">
          Copyright  (c) Brainstation 23 LMS - 2025. All rights reserved.
            23
          </span>
          <span className="user-home-text315">
            Data retention summary Get the mobile app
          </span>
          <div className="user-home-frame">
            <div className="user-home-frame-header">
              <span className="user-home-text316">Online users</span>
            </div>
            <div className="user-home-table-contents">
              <div className="user-home-frame-cell1">
                <span className="user-home-text317">
                  3 online users (last 5 minutes)
                </span>
              </div>
              <div className="user-home-frame-cell2">
                <span className="user-home-text318">
                  <span className="user-home-text319">Noushin Nurjahan</span>
                  <br></br>
                  <span> Other users (2)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .user-home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .user-home-user-home1 {
            width: 100%;
            height: 3052px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .user-home-user-home2 {
            top: 0px;
            left: 0px;
            width: 1915px;
            height: 3052px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .user-home-user-dashboard-form {
            top: 31px;
            left: -5px;
            width: 1915px;
            height: 2811.630126953125px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 1px;
            background-color: rgba(255, 255, 255, 1);
          }
          .user-home-frame201 {
            top: 0.0810546875px;
            left: 0px;
            width: 93px;
            height: 2812px;
            display: flex;
            overflow: hidden;
            position: absolute;
            box-sizing: content-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(255, 255, 255, 1);
            border-style: solid;
            border-width: 1px;
            background-color: rgba(255, 255, 255, 1);
          }
          .user-home-dashboard-clicked-btn {
            top: 158px;
            left: 0px;
            width: 93px;
            height: 48px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(0, 160, 220, 1);
          }
          .user-home-element22 {
            top: 12px;
            left: 35px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .user-home-user-exit-btn {
            top: 393px;
            left: 1px;
            width: 93px;
            height: 48px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .user-home-logout3 {
            top: 12px;
            left: 35px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .user-home-frame208 {
            top: 0px;
            left: 93px;
            width: 1827px;
            height: 71px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(0, 160, 220, 1);
          }
          .user-home-text100 {
            top: 15px;
            left: 1681px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Montserrat;
            font-weight: 700;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text101 {
            top: 39px;
            left: 1669px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 13px;
            font-style: Medium;
            text-align: left;
            font-family: Montserrat;
            font-weight: 500;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-setting21 {
            top: 17px;
            left: 1773px;
            width: 38px;
            height: 38px;
            position: absolute;
          }
          .user-home-user1 {
            top: 19px;
            left: 20px;
            width: 34px;
            height: 34px;
            position: absolute;
          }
          .user-home-text102 {
            top: 16px;
            left: 61px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: Montserrat;
            font-weight: 600;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text103 {
            top: 38px;
            left: 61px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: SemiBold;
            text-align: left;
            font-family: Montserrat;
            font-weight: 600;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-line16 {
            top: 65px;
            left: 1764px;
            width: 58px;
            height: 1px;
            position: absolute;
          }
          .user-home-downloadremovebgpreview4 {
            top: -6px;
            left: -20px;
            width: 125px;
            height: 105px;
            position: absolute;
          }
          .user-home-image {
            gap: 32px;
            top: 131px;
            left: 190px;
            width: 1598px;
            height: 450px;
            display: flex;
            padding: 0 40px 40px;
            overflow: hidden;
            position: absolute;
            align-self: stretch;
            background: linear-gradient(
              90deg,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 1) 100%
            );
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 50px;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/external/tq_5f4iphb7ga-21fe-500h.png');
          }
          .user-home-depth7-frame010 {
            gap: 8px;
            top: 249px;
            left: 63px;
            width: 529px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            padding-right: 13px;
            flex-direction: column;
          }
          .user-home-depth8-frame010 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-depth8-frame110 {
            width: 503px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-text104 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text105 {
            top: 116px;
            left: 64px;
            color: rgb(255, 255, 255);
            width: 474px;
            height: auto;
            position: absolute;
            font-size: 48px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: 'Epilogue';
            font-weight: 700;
            line-height: 60px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-group133545 {
            top: 361px;
            left: 64px;
            width: 541px;
            height: 49px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .user-home-group133546 {
            top: 0px;
            left: 0px;
            width: 541px;
            height: 49px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .user-home-group133550 {
            top: 0px;
            left: 0px;
            width: 541px;
            height: 49px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(255, 255, 255, 0.23000000417232513);
          }
          .user-home-rectangle81 {
            top: 0px;
            left: 0px;
            width: 102px;
            height: 49px;
            position: absolute;
            border-radius: 40px 0 0 40px;
          }
          .user-home-text106 {
            top: 12px;
            left: 37px;
            color: rgba(76, 76, 76, 1);
            width: 27px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-polygon1 {
            top: 21px;
            left: 78px;
            width: 17px;
            height: 9px;
            position: absolute;
          }
          .user-home-barcodescanner {
            top: 14px;
            left: 504px;
            width: 20px;
            height: 20px;
            position: absolute;
          }
          .user-home-search {
            top: 15px;
            left: 464px;
            width: 20px;
            height: 20px;
            position: absolute;
          }
          .user-home-line1 {
            top: 8px;
            left: 493px;
            width: 33px;
            height: 1px;
            position: absolute;
          }
          .user-home-text107 {
            top: 12px;
            left: 123px;
            color: rgba(198, 198, 198, 1);
            width: 229px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-group6 {
            top: 635px;
            left: 128px;
            width: 930px;
            height: 72px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .user-home-text108 {
            top: 44px;
            left: 2px;
            color: rgba(22, 20, 17, 1);
            width: 928px;
            height: auto;
            position: absolute;
            font-size: 22px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Epilogue;
            font-weight: 700;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text109 {
            color: rgba(0, 160, 220, 1);
            width: 928px;
            height: auto;
            position: absolute;
            font-size: 22px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Epilogue;
            font-weight: 700;
            line-height: 28px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text110 {
            color: rgba(0, 160, 220, 1);
            font-weight: 700;
          }
          .user-home-group81 {
            top: 1378px;
            left: 172px;
            width: 176px;
            height: 66px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .user-home-depth8-frame011 {
            top: 0px;
            left: 0px;
            display: flex;
            position: absolute;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-depth8-frame210 {
            top: 45px;
            left: 0px;
            display: flex;
            position: absolute;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-group9 {
            top: 1378px;
            left: 558px;
            width: 176px;
            height: 45px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .user-home-depth8-frame012 {
            top: 0px;
            left: 0px;
            display: flex;
            position: absolute;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-depth8-frame111 {
            top: 24px;
            left: 0px;
            display: flex;
            position: absolute;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-main-area {
            top: 739px;
            left: 113px;
            width: 1775px;
            height: 959px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 0 10px 0 0;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-text112 {
            top: 592px;
            left: 17px;
            color: rgba(76, 76, 76, 1);
            width: 228px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text113 {
            top: 1586px;
            left: 1354px;
            color: rgba(138, 138, 138, 1);
            width: 143px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text114 {
            top: 1586px;
            left: 44px;
            color: rgba(138, 138, 138, 1);
            width: 513px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text115 {
            top: 1958px;
            left: 44px;
            color: rgba(138, 138, 138, 1);
            width: 513px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-recommended-book-list1 {
            gap: 39px;
            top: 303px;
            left: 11px;
            width: 2150px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .user-home-frame191 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1210 {
            top: 16px;
            left: 20px;
            width: 123px;
            height: 170px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2910 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text116 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text117 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text118 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text119 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame2911 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1211 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2912 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text121 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text122 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text123 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text124 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame301 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1212 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2913 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text126 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text127 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text128 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text129 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame311 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1213 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2914 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text131 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text132 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text133 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text134 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame321 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1214 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2915 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text136 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text137 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text138 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text139 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame331 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1215 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-text141 {
            top: 198px;
            left: 15px;
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text142 {
            top: 217px;
            left: 15px;
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-union-stroke1 {
            top: 222px;
            left: 125px;
            width: 19px;
            height: 18px;
            position: absolute;
          }
          .user-home-union-stroke2 {
            top: 222px;
            left: 125px;
            width: 19px;
            height: 18px;
            position: absolute;
          }
          .user-home-text143 {
            top: 258.9997253417969px;
            left: 15px;
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text144 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame341 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1216 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-text146 {
            top: 198px;
            left: 15px;
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text147 {
            top: 217px;
            left: 15px;
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text148 {
            top: 236px;
            left: 15px;
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text149 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-union-stroke3 {
            top: 222px;
            left: 126px;
            width: 19px;
            height: 18px;
            position: absolute;
          }
          .user-home-frame361 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1217 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-rectangle13 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-text151 {
            top: 198px;
            left: 15px;
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text152 {
            top: 217px;
            left: 15px;
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text153 {
            top: 236px;
            left: 15px;
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text154 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-union-stroke4 {
            top: 222px;
            left: 122px;
            width: 19px;
            height: 18px;
            position: absolute;
          }
          .user-home-frame38 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1218 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-text156 {
            top: 198px;
            left: 15px;
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text157 {
            top: 217px;
            left: 15px;
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text158 {
            top: 236px;
            left: 15px;
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text159 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-vector3 {
            top: 109.06387329101562px;
            left: 89.9999008178711px;
            width: 20px;
            height: 16px;
            position: absolute;
          }
          .user-home-union-stroke5 {
            top: 227px;
            left: 125px;
            width: 19px;
            height: 18px;
            position: absolute;
          }
          .user-home-frame371 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1219 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2916 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text161 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text162 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text163 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text164 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame351 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1220 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2917 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text166 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text167 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text168 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text169 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-recommended-book-list2 {
            gap: 39px;
            top: 1263px;
            left: 44px;
            width: 1553px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .user-home-frame192 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1221 {
            top: 16px;
            left: 20px;
            width: 123px;
            height: 170px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2918 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text171 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text172 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text173 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text174 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame2919 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1222 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2920 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text176 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text177 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text178 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text179 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame302 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1223 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2921 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text181 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text182 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text183 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text184 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame312 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1224 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2922 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text186 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text187 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text188 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text189 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame322 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1225 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2923 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text191 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text192 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text193 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text194 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame332 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1226 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2924 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text196 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text197 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text198 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text199 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame342 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1227 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2925 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text201 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text202 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text203 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text204 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame352 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1228 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2926 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text206 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text207 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text208 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text209 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-recommended-book-list3 {
            gap: 39px;
            top: 1631px;
            left: 44px;
            width: 1553px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .user-home-frame193 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1229 {
            top: 16px;
            left: 20px;
            width: 123px;
            height: 170px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2927 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text211 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text212 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text213 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text214 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame2928 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1230 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2929 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text216 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text217 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text218 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text219 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame303 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1231 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2930 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text221 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text222 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text223 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text224 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame313 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1232 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2931 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text226 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text227 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text228 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text229 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame323 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1233 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2932 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text231 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text232 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text233 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text234 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame333 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1234 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2933 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text236 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text237 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text238 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text239 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame343 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1235 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2934 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text241 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text242 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text243 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text244 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame353 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1236 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2935 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text246 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text247 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text248 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text249 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-recommended-book-list4 {
            gap: 39px;
            top: 2003px;
            left: 44px;
            width: 558px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .user-home-frame194 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1237 {
            top: 16px;
            left: 20px;
            width: 123px;
            height: 170px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2936 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text251 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text252 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text253 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text254 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame362 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1238 {
            top: 16px;
            left: 20px;
            width: 123px;
            height: 170px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2937 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text256 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text257 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text258 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text259 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-frame372 {
            width: 160px;
            height: 260px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1239 {
            top: 16px;
            left: 20px;
            width: 123px;
            height: 170px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame2938 {
            gap: 5px;
            top: 198px;
            left: 15px;
            width: 130px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text261 {
            color: rgba(76, 76, 76, 1);
            width: 130px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text262 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text263 {
            color: rgba(76, 76, 76, 1);
            width: 101px;
            height: auto;
            font-size: 10px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text264 {
            color: rgba(76, 76, 76, 1);
          }
          .user-home-text266 {
            top: 262px;
            left: 17px;
            color: rgba(76, 76, 76, 1);
            width: 286px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-news-new-arrivals {
            top: 3px;
            left: 623px;
            width: 1140px;
            height: 233px;
            display: flex;
            overflow: hidden;
            position: absolute;
            box-sizing: content-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(235, 247, 252, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle9 {
            top: 0px;
            left: 0px;
            width: 58px;
            height: 233px;
            position: absolute;
            border-radius: 10px 0 0 10px;
          }
          .user-home-new-arivals {
            top: 0px;
            left: 13px;
            width: 1039px;
            height: 229px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .user-home-frame39 {
            top: 0px;
            left: 45px;
            width: 994px;
            height: 229px;
            display: flex;
            overflow: hidden;
            position: absolute;
            box-sizing: content-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(235, 247, 252, 1);
            border-style: solid;
            border-width: 1px;
          }
          .user-home-arrivals {
            gap: 48px;
            top: 13px;
            left: 35px;
            width: 959px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .user-home-frame195 {
            width: 167px;
            height: 203px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1240 {
            top: 16px;
            left: 22px;
            width: 123px;
            height: 170px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame202 {
            width: 167px;
            height: 203px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1241 {
            top: 15px;
            left: 19px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame211 {
            width: 167px;
            height: 203px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1242 {
            top: 15px;
            left: 19px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame221 {
            width: 167px;
            height: 203px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1243 {
            top: 15px;
            left: 19px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-latest-news {
            top: 229px;
            left: 13px;
            width: 848px;
            height: 233px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .user-home-text267 {
            top: 197px;
            left: 1.4210854715202004e-14px;
            color: rgba(235, 247, 252, 1);
            width: 157px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: center;
            font-family: Inter;
            font-weight: 500;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-news-rack-area {
            top: 0px;
            left: 45px;
            width: 803px;
            height: 233px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .user-home-news {
            gap: 48px;
            top: 14px;
            left: 35px;
            width: 812px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .user-home-frame196 {
            width: 167px;
            height: 203px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1244 {
            top: 16px;
            left: 22px;
            width: 123px;
            height: 170px;
            position: absolute;
            border-color: rgba(225, 225, 225, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
          }
          .user-home-frame203 {
            width: 167px;
            height: 203px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1245 {
            top: 15px;
            left: 19px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-color: rgba(225, 225, 225, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
          }
          .user-home-frame212 {
            width: 167px;
            height: 203px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1246 {
            top: 15px;
            left: 19px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-color: rgba(225, 225, 225, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 5px;
          }
          .user-home-frame222 {
            width: 167px;
            height: 203px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1247 {
            top: 15px;
            left: 15px;
            width: 130px;
            height: 172px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-frame197 {
            top: 12px;
            left: 942px;
            width: 167px;
            height: 203px;
            display: flex;
            overflow: hidden;
            position: absolute;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(235, 247, 252, 1);
          }
          .user-home-rectangle1248 {
            top: 16px;
            left: 22px;
            width: 123px;
            height: 170px;
            position: absolute;
            border-radius: 5px;
          }
          .user-home-vector2 {
            top: 123.06387329101562px;
            left: 1134.9998779296875px;
            width: 20px;
            height: 16px;
            position: absolute;
          }
          .user-home-mini-caurosel {
            top: 0px;
            left: 11px;
            width: 547px;
            height: 233px;
            display: flex;
            overflow: hidden;
            position: absolute;
            background: linear-gradient(
              164deg,
              rgba(234, 82, 48, 1) 0%,
              rgba(103, 36, 190, 1) 89%,
              rgba(87, 31, 207, 1) 100%
            );
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.10000000149011612);
          }
          .user-home-group82 {
            top: 33px;
            left: 23px;
            width: 500px;
            height: 168px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .user-home-text268 {
            left: 13px;
            color: rgba(235, 247, 252, 1);
            width: 192px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text269 {
            top: 52px;
            left: 13px;
            color: rgba(235, 247, 252, 1);
            width: 487px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text270 {
            top: 137px;
            color: rgba(235, 247, 252, 1);
            width: 487px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-frame373 {
            gap: 10px;
            top: 196px;
            left: 36px;
            width: 70px;
            display: flex;
            position: absolute;
            align-items: flex-end;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .user-home-ellipse14 {
            width: 10px;
            height: 10px;
            border-color: rgba(235, 247, 252, 1);
            border-style: solid;
            border-width: 1px;
          }
          .user-home-ellipse13 {
            width: 10px;
            height: 10px;
            border-color: rgba(235, 247, 252, 1);
            border-style: solid;
            border-width: 1px;
          }
          .user-home-ellipse12 {
            width: 10px;
            height: 10px;
            border-color: rgba(235, 247, 252, 1);
            border-style: solid;
            border-width: 1px;
          }
          .user-home-ellipse11 {
            width: 10px;
            height: 10px;
            border-color: rgba(235, 247, 252, 1);
            border-style: solid;
            border-width: 1px;
          }
          .user-home-frame236 {
            top: 656.0810546875px;
            left: 1585px;
            width: 244px;
            height: 38px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 12px;
            background-color: rgba(37, 195, 254, 1);
          }
          .user-home-text271 {
            top: 8px;
            left: 64px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: Montserrat;
            font-weight: 600;
            line-height: 139.9999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth4-frame41 {
            gap: 12px;
            top: 1120px;
            left: 128px;
            width: 960px;
            height: 564px;
            display: flex;
            padding: 16px;
            position: absolute;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-depth5-frame0 {
            gap: 12px;
            width: 928px;
            height: 230px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
          }
          .user-home-heroiconssolidheart1 {
            top: 122px;
            left: 88px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .user-home-heroiconssolidheart2 {
            top: 122px;
            left: 303px;
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .user-home-heroiconssolidheart3 {
            top: 122px;
            left: 507px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .user-home-heroiconssolidheart4 {
            top: 122px;
            left: 700px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .user-home-heroiconssolidheart5 {
            top: 125px;
            left: 893px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .user-home-heroiconssolidheart6 {
            top: 122px;
            left: 303px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .user-home-depth5-frame11 {
            gap: 12px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .user-home-depth6-frame01 {
            gap: 12px;
            height: 290px;
            display: flex;
            padding: 0 0 12px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-depth7-frame011 {
            width: 176px;
            height: 176px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 12px;
            background-size: cover;
            background-image: url('/external/tq_0asqgpnlqo-k0jm-200h.png');
          }
          .user-home-depth7-frame11 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-depth8-frame013 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text272 {
            color: rgba(22, 20, 17, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: Epilogue;
            font-weight: 500;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame112 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text273 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame211 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text274 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth6-frame11 {
            gap: 12px;
            width: 176px;
            height: 250px;
            display: flex;
            padding: 0 0 12px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-depth7-frame012 {
            width: 176px;
            height: 176px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 12px;
            background-size: cover;
            background-image: url('/external/tq_w0in-hcuus-lz1-200h.png');
          }
          .user-home-depth7-frame12 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-depth8-frame014 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text275 {
            color: rgba(22, 20, 17, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: Epilogue;
            font-weight: 500;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame113 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text276 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame212 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text277 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth6-frame21 {
            gap: 12px;
            height: 290px;
            display: flex;
            padding: 0 0 12px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-depth7-frame013 {
            width: 176px;
            height: 176px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 12px;
            background-size: cover;
            background-image: url('/external/tq_r_2z0otzcy-8pd-200h.png');
          }
          .user-home-depth7-frame13 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-depth8-frame015 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text278 {
            color: rgba(22, 20, 17, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: Epilogue;
            font-weight: 500;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame114 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text279 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame213 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text280 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth6-frame31 {
            gap: 12px;
            height: 290px;
            display: flex;
            padding: 0 0 12px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-depth7-frame014 {
            width: 176px;
            height: 176px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 12px;
            background-size: cover;
            background-image: url('/external/tq_wgpodgci1a-tgwh-200h.png');
          }
          .user-home-depth7-frame14 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-depth8-frame016 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text281 {
            color: rgba(22, 20, 17, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: Epilogue;
            font-weight: 500;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame115 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text282 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame214 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text283 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth6-frame41 {
            gap: 12px;
            height: 290px;
            display: flex;
            padding: 0 0 12px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-depth7-frame015 {
            width: 176px;
            height: 176px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 12px;
            background-size: cover;
            background-image: url('/external/tq_uowfsrmdnl-mfh-200h.png');
          }
          .user-home-depth7-frame15 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-depth8-frame017 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text284 {
            color: rgba(22, 20, 17, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: Epilogue;
            font-weight: 500;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame116 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text285 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame215 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text286 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-rectangle15 {
            top: 1581.4898681640625px;
            left: 911.6198120117188px;
            width: 382px;
            height: 39px;
            position: absolute;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            box-sizing: content-box;
          }
          .user-home-text287 {
            top: 1009px;
            left: 1710px;
            color: rgba(138, 138, 138, 1);
            width: 129px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth4-frame42 {
            gap: 12px;
            top: 1394px;
            left: 1080px;
            width: 936px;
            height: 449px;
            display: flex;
            padding: 16px;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .user-home-depth5-frame12 {
            gap: 12px;
            top: -17px;
            left: 8px;
            width: 928px;
            height: 290px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .user-home-depth6-frame02 {
            gap: 12px;
            height: 290px;
            display: flex;
            padding: 0 0 12px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-depth7-frame016 {
            width: 176px;
            height: 176px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 12px;
            background-size: cover;
            background-image: url('/external/tq_cubxz78vlq-6e7q-200h.png');
          }
          .user-home-depth7-frame16 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-depth8-frame018 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text288 {
            color: rgba(22, 20, 17, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: Epilogue;
            font-weight: 500;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame117 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text289 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame216 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text290 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth6-frame12 {
            gap: 12px;
            height: 290px;
            display: flex;
            padding: 0 0 12px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-depth7-frame017 {
            width: 176px;
            height: 176px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 12px;
            background-size: cover;
            background-image: url('/external/tq_so10ain05i-jmd-200h.png');
          }
          .user-home-depth7-frame17 {
            width: 176px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-depth8-frame019 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text291 {
            color: rgba(22, 20, 17, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: Epilogue;
            font-weight: 500;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame118 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text292 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame217 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text293 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth6-frame22 {
            gap: 12px;
            height: 290px;
            display: flex;
            padding: 0 0 12px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-depth7-frame018 {
            width: 176px;
            height: 176px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 12px;
            background-size: cover;
            background-image: url('/external/tq_m5otbqmv_p-az0l-200h.png');
          }
          .user-home-depth7-frame18 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-depth8-frame020 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text294 {
            color: rgba(22, 20, 17, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: Epilogue;
            font-weight: 500;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame119 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text295 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame218 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text296 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth6-frame32 {
            gap: 12px;
            height: 290px;
            display: flex;
            padding: 0 0 12px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-depth7-frame019 {
            width: 176px;
            height: 176px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 12px;
            background-size: cover;
            background-image: url('/external/tq_jbs6wc6zgp-hils-200h.png');
          }
          .user-home-depth7-frame19 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-depth8-frame021 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text297 {
            color: rgba(22, 20, 17, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: Epilogue;
            font-weight: 500;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame120 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text298 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth8-frame219 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-text299 {
            color: rgba(137, 114, 96, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Epilogue;
            font-weight: 400;
            line-height: 21px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-depth6-frame42 {
            gap: 12px;
            height: 290px;
            display: flex;
            padding: 0 0 12px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-bento-grid {
            top: 1743px;
            left: 520px;
            width: 1368px;
            height: 493px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .user-home-frame11 {
            top: 266px;
            left: 438.2861328125px;
            width: 120.946533203125px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .user-home-frame16 {
            top: 430px;
            left: 957.7197265625px;
            width: 120.946533203125px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .user-home-text300 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text301 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text302 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-group133554 {
            top: 0px;
            left: 0px;
            width: 1368px;
            height: 307px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .user-home-rectangle17 {
            top: 0px;
            left: 0px;
            width: 1368px;
            height: 307px;
            position: absolute;
            border-radius: 15px;
          }
          .user-home-frame12 {
            top: 64.470703125px;
            left: 276.4660339355469px;
            width: 250.1359100341797px;
            height: 145.05882263183594px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .user-home-component16 {
            top: 126.63818359375px;
            left: 1016.3414306640625px;
            width: 285.83953857421875px;
            height: 32.603694915771484px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .user-home-rectangle82 {
            top: 1860px;
            left: 884px;
            width: 513px;
            height: 70px;
            position: absolute;
            border-radius: 10px;
          }
          .user-home-image2412205167789441 {
            top: 1663px;
            left: 467px;
            width: 300px;
            height: 393px;
            position: absolute;
          }
          .user-home-text303 {
            top: 1861px;
            left: 918px;
            color: rgba(0, 160, 220, 1);
            height: auto;
            position: absolute;
            font-size: 48px;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-footer {
            top: 2500px;
            left: -5px;
            width: 1907px;
            height: 319px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(46, 46, 54, 1);
          }
          .user-home-workwithus {
            top: 61px;
            left: 398px;
            width: 22px;
            height: 21px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .user-home-frame76 {
            gap: 10px;
            top: 0px;
            left: 0px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .user-home-plat-store {
            top: 46px;
            left: 1817px;
            width: 60px;
            height: 52px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(0, 160, 220, 0.6000000238418579);
          }
          .user-home-vector22 {
            top: 129.5px;
            left: 106.99993896484375px;
            width: 1280px;
            height: 5px;
            position: absolute;
          }
          .user-home-text304 {
            top: 2058.0810546875px;
            left: 96px;
            color: rgba(18, 11, 11, 1);
            width: 286px;
            height: auto;
            position: absolute;
            font-size: 25px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 128.52272987365723%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-vector {
            top: 472px;
            left: 403px;
            width: 17px;
            height: 15px;
            position: absolute;
          }
          .user-home-rectangle14 {
            top: 460px;
            left: 249px;
            width: 201px;
            height: 43px;
            position: absolute;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            box-sizing: content-box;
          }
          .user-home-text305 {
            top: 470px;
            left: 265px;
            color: rgb(255, 255, 255);
            width: 180px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: SemiBold;
            text-align: left;
            font-family: 'Montserrat';
            font-weight: 600;
            line-height: 140%;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text306 {
            font-size: 12px;
          }
          .user-home-group211 {
            top: 2129.418212890625px;
            left: 100.73697662353516px;
            width: 1775.3646240234375px;
            height: 253.33595275878906px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .user-home-rectangle21 {
            top: 0px;
            left: 0px;
            width: 154px;
            height: 253px;
            position: absolute;
            border-radius: 15px;
          }
          .user-home-rectangle19 {
            top: 0.0000877629718161188px;
            left: 1621.765625px;
            width: 154px;
            height: 253px;
            position: absolute;
            border-radius: 15px;
          }
          .user-home-rectangle31 {
            top: 0.0000877629718161188px;
            left: 179.53125px;
            width: 153px;
            height: 253px;
            position: absolute;
            border-radius: 15px;
          }
          .user-home-rectangle41 {
            top: 0.0000877629718161188px;
            left: 358.0650939941406px;
            width: 153px;
            height: 253px;
            position: absolute;
            border-radius: 15px;
          }
          .user-home-rectangle18 {
            top: 0.0000877629718161188px;
            left: 536.5989379882812px;
            width: 154px;
            height: 253px;
            position: absolute;
            border-radius: 15px;
          }
          .user-home-group212 {
            top: 0.0000877629718161188px;
            left: 722.1145629882812px;
            width: 510.6666564941406px;
            height: 253.33595275878906px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .user-home-rectangle22 {
            top: 0px;
            left: 0px;
            width: 154px;
            height: 253px;
            position: absolute;
            border-radius: 15px;
          }
          .user-home-rectangle32 {
            top: -2.2737367544323206e-12px;
            left: 179.53128051757812px;
            width: 153px;
            height: 253px;
            position: absolute;
            border-radius: 15px;
          }
          .user-home-rectangle42 {
            top: -2.2737367544323206e-12px;
            left: 358.06512451171875px;
            width: 153px;
            height: 253px;
            position: absolute;
            border-radius: 15px;
          }
          .user-home-text308 {
            top: 1140.01171875px;
            left: 1133.0416259765625px;
            color: rgba(41, 42, 56, 1);
            width: 127px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Bold;
            text-align: left;
            font-family: HK Grotesk;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-scrollbar {
            top: 31px;
            left: 1902px;
            width: 17px;
            height: 2811.630126953125px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(241, 241, 241, 1);
          }
          .user-home-arrow1 {
            top: 6px;
            left: 4px;
            width: 7px;
            height: 7px;
            position: absolute;
          }
          .user-home-arrow2 {
            top: 2799px;
            left: 4px;
            width: 7px;
            height: 7px;
            position: absolute;
          }
          .user-home-thumb {
            gap: 10px;
            top: 762px;
            left: -1px;
            width: 13px;
            height: 613px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            background-color: rgba(193, 193, 193, 1);
          }
          .user-home-text309 {
            color: rgba(193, 193, 193, 1);
            width: 13px;
            height: auto;
            font-size: 4px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text314 {
            top: 2549px;
            left: 98px;
            color: rgba(245, 250, 255, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text315 {
            top: 2661px;
            left: 98px;
            color: rgba(245, 250, 255, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: left;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-frame {
            top: 2137px;
            left: 1456px;
            width: 362px;
            height: 239px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(0, 160, 220, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .user-home-frame-header {
            gap: 10px;
            width: 313px;
            height: 40px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .user-home-text316 {
            color: rgba(0, 160, 220, 1);
            height: auto;
            flex-grow: 1;
            font-size: 24px;
            font-style: Medium;
            text-align: left;
            font-family: Roboto;
            font-weight: 500;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-table-contents {
            height: 109px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .user-home-frame-cell1 {
            gap: 10px;
            display: flex;
            padding: 14px 16px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .user-home-text317 {
            color: var(--dl-color-neutral-900);
            height: auto;
            flex-grow: 1;
            font-size: 20px;
            font-style: Light;
            text-align: left;
            font-family: Roboto;
            font-weight: 300;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-frame-cell2 {
            gap: 10px;
            display: flex;
            padding: 14px 16px;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .user-home-text318 {
            color: rgba(25, 196, 22, 1);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Light;
            text-align: left;
            font-family: Roboto;
            font-weight: 300;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .user-home-text319 {
            color: rgba(25, 196, 22, 1);
            text-decoration: UNDERLINE;
          }
        `}
      </style>
    </>
  )
}

export default UserHome
