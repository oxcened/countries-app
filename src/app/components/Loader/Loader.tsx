import React from 'react';
import { Subscription } from 'rxjs';
import LoaderController from '../../utils/LoaderController';

type LoaderState = {
    visible: boolean;
}

class Loader extends React.Component<any, LoaderState> {
    private subscription?: Subscription;

    constructor(props: any) {
        super(props);
        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        this.subscription = LoaderController.getInstance().getMessage().subscribe(visible => this.setState({ visible }));
    }

    componentWillUnmount() {
        this.subscription?.unsubscribe();
    }

    render() {
        return <>
            {this.state.visible && <div className='loader' />}
        </>;
    }
}

export default Loader;
