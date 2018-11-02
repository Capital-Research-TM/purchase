import React from 'react'
import styled from 'styled-components'
import Menu from './menu.jsx'

const TopBarWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${props => props.open ? "white" : "#1b1b1d"}
    border: 1px solid ${props => props.open ? "rgb(224, 224, 224)" : "black"};
    box-shadow: 1px 1px 10px 1px ${props => props.open ? "whitesmoke" : "black"};
    height: 47px;
    width: 228px;
    align-items: center;
    font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
`
const Buy = styled.div `
    margin-left: 12px;
    margin-top: 4px;
    font-size: 16px;
    color : ${props => props.open ? "black" : "white"};
`
const DotsWrapper = styled.div `
    margin-right: 10px;
    height: 25px;
    width: 25px;
    position: relative;
`
const Dot = styled.span `
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background: ${props => props.open ? "black" : "white"};
    display: inline-block;
    margin-right: 3px;
    margin-bottom: 3px;
    ${DotsWrapper}: hover & {
        background: ${props => props.up ? "#21ce99" : "#f45531"};
    }
`

const Padlock = styled.img `
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`


//props.ticker //props.open
//is there a better way than just passing this.props.open to everything? redux

class ThreeDots extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <Dot open={this.props.open} up={this.props.up}></Dot>
      <Dot open={this.props.open} up={this.props.up}></Dot>
      <Dot open={this.props.open} up={this.props.up}></Dot>
      </div>
    )
  }
}

class TopBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const padlockColor = this.props.open ? '/images/padlock.png' : '/images/padlock-white.png'
        const dotsRender = this.props.error ?  <Padlock src={padlockColor}/> : <ThreeDots open={this.props.open} up={this.props.up}/>
        const menu = this.props.menu  && !this.props.error? <Menu open={this.props.open} up={this.props.up} /> : null;
        return (
            <TopBarWrapper open={this.props.open}>
                <Buy open={this.props.open}>Buy {this.props.ticker}</Buy>
                <DotsWrapper error={this.props.error} open={this.props.open} onClick={() => {
                  this.props.error ? null : this.props.clickHandler({menu: !this.props.menu})}
                  }>
                  {dotsRender}
                  {menu}
                </DotsWrapper>
            </TopBarWrapper>
        )   
    }
}
//put menu
export default TopBar;

