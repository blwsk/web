import compose from '../../utils/compose';
import withNav from './withNav';
import withStyles from './withStyles';
import withTracking from './withTracking';

export default compose(withTracking, withStyles, withNav);
