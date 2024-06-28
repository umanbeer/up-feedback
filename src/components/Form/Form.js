import { Component } from 'react';
import { toast } from 'react-toastify';
import Button from 'components/Button';
import { Control } from './Form.styled';
import Rating from 'components/Rating';
import CustomSelect from 'components/CustomSelect';
import storageAPI from 'helpers/storage';

const SAVED_FEEDBACK_KEY = 'saved-feedback';
const DEFAULT_STATE = {
  city: 'Оберіть місто',
  shop: 'Оберіть магазин',
  score: 0,
  comment: '',
};

class FeedbackForm extends Component {
  state = { ...DEFAULT_STATE };

  async componentDidMount() {
    const { shops } = this.props;
    const savedFeedback = storageAPI.load(SAVED_FEEDBACK_KEY);
    if (savedFeedback) {
      const { score, comment } = savedFeedback;
      this.setState({ score, comment });

      if (shops.some(({city}) => city === savedFeedback.city)) {
        this.setState({ city: savedFeedback.city });
      }

      if (shops.some(({name}) => name === savedFeedback.shop)) {
        this.setState({ shop: savedFeedback.shop });
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      storageAPI.save(SAVED_FEEDBACK_KEY, this.state);
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { city, shop, score } = this.state;

    if (city === '' || city === DEFAULT_STATE.city) {
      toast.error('Оберіть місто!');
      return;
    }

    if (shop === '' || shop === DEFAULT_STATE.shop) {
      toast.error('Оберіть фірмовий магазин!');
      return;
    }

    if (score === 0) {
      toast.error('Оцініть якість сервісу магазину!');
      return;
    }

    const data = {};
    new FormData(form).forEach((value, name) => {
      data[name] = value;
    });

    data.shop = shop;
    data.score = score;

    const isSuccess = await this.props.onSubmit(data);

    if (isSuccess) {
      storageAPI.remove(SAVED_FEEDBACK_KEY);
      this.setState({ ...DEFAULT_STATE });
    }
  };

  handleRatingChange = score => {
    this.setState({ score });
  };

  handleCityChange = city => {
    this.setState({ shop: DEFAULT_STATE.shop });
    this.setState({ city });
  };

  handleShopChange = shop => {
    this.setState({ shop });
  };

  handleCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    const { shops } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <Control>
          <span>Оберіть місто</span>
          <CustomSelect
            onChange={this.handleCityChange}
            defaultText={this.state.city}
            optionsList={shops.reduce((previousValue, currentValue) => {
              if (
                !previousValue.find(city => city.name === currentValue.city)
              ) {
                previousValue.push({
                  id: currentValue.id,
                  name: currentValue.city,
                });
              }
              return previousValue;
            }, [])}
          />
        </Control>

        <Control>
          <span>Оберіть фірмовий магазин, який бажаєте оцінити</span>
          <CustomSelect
            onChange={this.handleShopChange}
            defaultText={this.state.shop}
            optionsList={shops.filter(shop => shop.city === this.state.city)}
          />
        </Control>

        <Control>
          <span>Оцініть якість сервісу магазину за 5-ти бальною шкалою</span>
          <Rating
            onChange={this.handleRatingChange}
            defaultRating={this.state.score}
          />
        </Control>

        <Control>
          <span>Ваші відгуки та пропозиції для покращення роботи магазину</span>
          <textarea
            name="comment"
            placeholder="Введіть текст"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </Control>

        <Button type="submit">Відправити</Button>
      </form>
    );
  }
}

export default FeedbackForm;
