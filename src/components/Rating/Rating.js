import { Component } from 'react';
import { ReactComponent as Hop } from '../../img/svg/hop.svg';

class Rating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: [],
      rating: 0,
      hovered: 0,
      selectedIcon: <Hop width={38} height={50} style={{ color: '#382E2D' }} />,
      deselectedIcon: <Hop width={38} height={50} style={{ color: 'white' }} />,
    };

    let outOf = props.outOf ? props.outOf : 5;

    for (var i = 0; i < outOf; i++) {
      this.state.stars.push(i + 1);
    }
  }

  componentDidUpdate(prevProps) {
    const { defaultRating } = this.props;
    if (prevProps.defaultRating !== defaultRating) {
      this.setState({ rating: defaultRating });
    }
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating,
    });

    if (this.props.onChange) this.props.onChange(newRating);
  }

  hoverRating(rating) {
    this.setState({
      hovered: rating,
    });
  }

  render() {
    const { stars, rating, hovered, deselectedIcon, selectedIcon } = this.state;

    return (
      <div>
        <div className="rating">
          {stars.map(star => {
            return (
              <span
                key={star}
                style={{ cursor: 'pointer', padding: '0 6px' }}
                onClick={() => {
                  this.changeRating(star);
                }}
                onMouseEnter={() => {
                  this.hoverRating(star);
                }}
                onMouseLeave={() => {
                  this.hoverRating(0);
                }}
              >
                {rating < star
                  ? hovered < star
                    ? deselectedIcon
                    : selectedIcon
                  : selectedIcon}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Rating;
