import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
           {this.props.pet.name}
           {this.props.pet.gender === 'male' ? '♂' : '♀'}
          </a>
          <div className="meta">
    <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
          this.props.pet.isAdopted ? ( 
          <button className="ui disabled button">Already adopted</button>  
          ) : (
          <button className="ui primary button"
          onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
          )
        }
        </div>
      </div>
    )
  }
}

// id: '5c142d9e-ea45-4231-8146-cccf71c704c0',
// type: 'dog',
// gender: 'male',
// age: 4,
// weight: 1,
// name: 'Trident',
// isAdopted: false,

export default Pet
