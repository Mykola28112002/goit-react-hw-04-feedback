import PropTypes from 'prop-types';
import { Box } from "../../Box";
import { Button } from "./FeedbackOptions.styled";

export const  FeedbackOptions = ({options,onLeaveFeedback}) => {
    
    return <Box display='flex' gridGap='10px'>
        {options.map(button => {
            return <Button key={button} onClick={() => onLeaveFeedback(button)}  type="button">{button}</Button>
        })}
    </Box>;

}
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};