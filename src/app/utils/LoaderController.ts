import { Subject } from 'rxjs';

class LoaderController {
    private static instance: LoaderController;
    private isLoaderVisible: Subject<boolean>;

    static getInstance() {
        if (!this.instance) {
            this.instance = new LoaderController();
        }
        return this.instance;
    }

    constructor() {
        this.isLoaderVisible = new Subject<boolean>();
    }

    postMessage(value: boolean) {
        this.isLoaderVisible.next(value);
    }

    getMessage() {
        return this.isLoaderVisible.asObservable();
    }
}

export default LoaderController;
