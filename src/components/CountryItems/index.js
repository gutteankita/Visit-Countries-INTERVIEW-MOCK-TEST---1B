import {Component} from 'react'
import {Li, Img, NameRemove, Name, Button} from './styledComponents'

class CountryItems extends Component {
  onClickRemoveBtn = () => {
    const {countryDetails, handleRemove} = this.props
    handleRemove(countryDetails.id)
  }

  render() {
    const {countryDetails} = this.props
    const {imageUrl, name, id} = countryDetails
    return (
      <>
        <Li key={id}>
          <Img src={imageUrl} alt="thumbnail" />
          <NameRemove>
            <Name>{name}</Name>
            <Button onClick={this.onClickRemoveBtn}>Remove</Button>
          </NameRemove>
        </Li>
      </>
    )
  }
}



export default CountryItems

