import {Component} from 'react'
import CountryItems from '../CountryItems'

import {
  CountriesContainer,
  Heading,
  CountriesVisitedSection,
  Ul,
  Li,
  Para,
  Button,
  ShowVistedCountriesSection,
  UlSection,
  NoContentPara,
} from './styledComponents'

const initailcountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class Countries extends Component {
  state = {
    countriesList: initailcountriesList,
    addList: [],
  }

  componentDidMount() {
    const visitedCountries = this.state.countriesList.filter(
      country => country.isVisited,
    )

    this.setState({
      addList: visitedCountries,
    })
  }

  onClickBtn = id => {
    const {countriesList} = this.state
    const selectedCountry = countriesList.find(each => each.id === id)

    if (selectedCountry && !selectedCountry.isVisited) {
      const updatedList = countriesList.map(country =>
        country.id === id ? {...country, isVisited: true} : country,
      )

      this.setState(prevState => ({
        countriesList: updatedList,
        addList: [...prevState.addList, selectedCountry],
      }))
    }
  }

  onRemove = id => {
    this.setState(prevState => {
      const updatedAddList = prevState.addList.filter(each => each.id !== id)
      const updatedCountriesList = prevState.countriesList.map(country => {
        if (country.id === id) {
          return {...country, isVisited: false}
        }
        return country
      })

      return {
        addList: updatedAddList,
        countriesList: updatedCountriesList,
      }
    })
  }

  render() {
    const {countriesList, addList} = this.state

    return (
      <CountriesContainer>
        <Heading>Countries</Heading>
        <CountriesVisitedSection>
          <Ul>
            {countriesList.map(each => (
              <Li key={each.id}>
                <Para>{each.name}</Para>
                {each.isVisited ? (
                  <Para>Visited</Para>
                ) : (
                  <Button onClick={() => this.onClickBtn(each.id)}>
                    Visit
                  </Button>
                )}
              </Li>
            ))}
          </Ul>
        </CountriesVisitedSection>
        <ShowVistedCountriesSection>
          <Heading>Visited Countries</Heading>
          {addList.length === 0 ? (
            <NoContentPara>No Countries Visited Yet!</NoContentPara>
          ) : (
            <UlSection>
              {addList.map(each => (
                <CountryItems
                  countryDetails={each}
                  key={each.id}
                  handleRemove={this.onRemove}
                />
              ))}
            </UlSection>
          )}
        </ShowVistedCountriesSection>
      </CountriesContainer>
    )
  }
}

export default Countries
