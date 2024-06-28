import React from 'react';
import {
  Container,
  SelectedText,
  OptionItem,
  OptionsList,
} from './CustomSelect.styled';

class CustomSelect extends React.Component {
  constructor(props) {
    super(props);

    // @defaultSelectText => Show default text in select
    // @showOptionList => Show / Hide List options
    // @optionsList => List of options
    this.state = {
      defaultSelectText: '',
      showOptionList: false,
    };
  }

  componentDidMount() {
    // Add Event Listner to handle the click that happens outside
    // the Custom Select Container
    document.addEventListener('mousedown', this.handleClickOutside);
    this.setState({
      defaultSelectText: this.props.defaultText,
    });
  }

  componentDidUpdate(prevProps) {
    const { defaultText } = this.props;
    if (prevProps.defaultText !== defaultText) {
      this.setState({ defaultSelectText: defaultText });
    }
  }

  componentWillUnmount() {
    // Remove the event listner on component unmounting
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  // This method handles the click that happens outside the
  // select text and list area
  handleClickOutside = e => {
    if (
      !e.target.hasAttribute('data-name') &&
      !['selected-text', 'active'].every(className =>
        e.target.classList.contains(className)
      )
    ) {
      this.setState({
        showOptionList: false,
      });
    }
  };

  // This method handles the display of option list
  handleListDisplay = () => {
    this.setState(prevState => {
      return {
        showOptionList: !prevState.showOptionList,
      };
    });
  };

  // This method handles the setting of name in select text area
  // and list display on selection
  handleOptionClick = e => {
    const name = e.target.getAttribute('data-name');

    this.setState({
      defaultSelectText: name,
      showOptionList: false,
    });

    this.props.onChange(name);
  };

  render() {
    const { optionsList } = this.props;
    const { showOptionList, defaultSelectText } = this.state;
    return (
      <Container>
        <SelectedText
          className={showOptionList ? 'selected-text active' : 'selected-text'}
          onClick={this.handleListDisplay}
        >
          {defaultSelectText}
        </SelectedText>
        {showOptionList && (
          <OptionsList>
            {optionsList.map(option => {
              return (
                <OptionItem
                  key={option.id}
                  data-name={option.name}
                  onClick={this.handleOptionClick}
                >
                  <b>{option.name}</b>
                  {option.address && option.address}
                </OptionItem>
              );
            })}
          </OptionsList>
        )}
      </Container>
    );
  }
}

export default CustomSelect;
