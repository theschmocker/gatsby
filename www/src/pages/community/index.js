import React, { Component } from "react"
import { graphql } from "gatsby"
import CommunityView from "../../views/community"

class CommunityPage extends Component {
  render() {
    const { location, data } = this.props
    return <CommunityView data={data} location={location} title={`All`} />
  }
}

export default CommunityPage

export const pageQuery = graphql`
  query {
    allCreatorsYaml {
      edges {
        node {
          name
          type
          description
          website
          github
          image {
            childImageSharp {
              fixed(width: 240, height: 240) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          for_hire
          hiring
          portfolio
          fields {
            slug
          }
        }
      }
    }
  }
`
