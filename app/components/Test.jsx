import { TITLE, SUBTITLE } from 'constants/constants';

export default class Test extends React.Component {
    render() {
        return (
            <div>
                <h1>{TITLE}</h1>
                {SUBTITLE}
            </div>
        );
    }
}
