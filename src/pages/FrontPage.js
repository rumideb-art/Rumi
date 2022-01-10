import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
    {
      allContentfulFront {
        nodes {
          mainHeading
          mainParagraph
          tarunpic {
            title
            id
            fluid {
             src
            }
          }
        }
      }
    }
  `

const FrontPage = () => {
  const data = useStaticQuery(getData);
  const common = data.allContentfulFront.nodes[0];

  return (
    <>
      <section className="mainSpacing">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <article>
                <h1>{common.mainHeading}</h1>
                <p>{common.mainParagraph}</p>
              </article>
            </div>
            <div className="col-md-6 align-self-center">
              <img src={common.tarunpic.fluid.src} className="image-main" />
            </div>
          </div>
        </div>
      </section>




    </>
  )
}

export default FrontPage
